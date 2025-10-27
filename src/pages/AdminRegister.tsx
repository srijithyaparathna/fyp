import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import PageLoader from "@/components/PageLoader";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [pwError, setPWError] = useState("");

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const handleRoleChange = (value: string) => setRole(value);

  const handleAppleSignin = () => {
    window.location.href = "https://appleid.apple.com/auth/authorize";
  };

 const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // Reset errors
  setUsernameError("");
  setEmailError("");
  setPasswordError("");
  setPWError("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validations
  if (!username) return setUsernameError("Username is required.");
  if (!email) return setEmailError("Email is required.");
  if (!emailRegex.test(email)) return setEmailError("Invalid email format.");
  if (!password) return setPasswordError("Password is required.");
  if (password !== confirmPassword) return setPWError("Passwords do not match.");
  if (!role) return alert("Please select a role.");

  // Map role to Prisma enum
  const roleMap: Record<string, string> = {
    Doctor: "DOCTOR",
    Nurse: "NURSE",
    Patient: "PATIENT",
  };
  const prismaRole = roleMap[role];
  if (!prismaRole) return alert("Invalid role selected.");

  // Get admin token and user from localStorage
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!token || user.role !== "ADMIN") {
    alert("Unauthorized! Only admins can register new users.");
    return;
  }

  // Send registration request
  try {
    const response = await fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: username,
        username,
        email,
        password,
        phoneNumber: "0000000000", // optional placeholder
        role: prismaRole, // mapped to Prisma enum
        nic: "000000000V", // optional placeholder
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Failed to register user.");
      return;
    }

    alert("User registered successfully!");
    navigate("/infantdetails");
  } catch (err) {
    console.error("Error registering user:", err);
    alert("Something went wrong. Please try again later.");
  }
};


  return (
    <div className="flex flex-col md:flex w-full relative mobile-background">
      {loading && <PageLoader />}
      <div className="grid lg:grid-cols-2 grid-rows-1 min-h-screen w-full md:px-[16px] lg:px-0">
        <div className="overflow-hidden px-[15px] sm:px-[100px] md:px-[160px] lg:px-[60px] xl:px-[60px] 2xl:px-[196px] justify-center 2xl:items-center py-[163px] md:py-[126px] lg:py-[40px] xl:py-[40px] 2xl:py-[100px] lg:space-y-[30px] 2xl:space-y-[60px] w-full flex flex-col">
          <div className="flex flex-col lg:space-y-[30px] 2xl:space-y-[0px]">
            <div className="font-productsans text-[32px] lg:flex hidden mb-5">
              Welcome to the NICU
            </div>
            <div className="flex flex-col font-productsans text-[20px] md:text-[32px] lg:hidden mb-[40px]">
              Welcome to the <br />
              <span className="text-[36px] md:text-[60px] -mt-3 md:-mt-4 mb-5">NICU</span>
            </div>

            <div className="space-y-[53px] lg:space-y-[15px] 2xl:w-[540px]">
              <form onSubmit={handleSignin}>
                <div className="space-y-[12px] xl:space-y-[16px]">
                  {/* Username */}
                  <div className="flex flex-col w-full space-y-[6px] md:space-y-[3px]">
                    <span className="text-[12px] md:text-[14px]">Enter Your User name</span>
                    <Input type="text" placeholder="Enter Your User name" onChange={(e) => setUsername(e.target.value)} />
                    {usernameError && <span className="text-red-500 text-sm">{usernameError}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col w-full space-y-[6px] md:space-y-[3px]">
                    <span className="text-[12px] md:text-[14px]">Email</span>
                    <Input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
                  </div>

                  {/* Password */}
                  <div className="flex flex-col w-full space-y-[6px] md:space-y-[3px]">
                    <span className="text-[12px] md:text-[14px]">Password</span>
                    <Input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && <span className="text-red-500 text-sm">{passwordError}</span>}
                  </div>

                  {/* Confirm Password */}
                  <div className="flex flex-col w-full space-y-[6px] md:space-y-[3px]">
                    <span className="text-[12px] md:text-[14px]">Confirm Password</span>
                    <Input type="password" placeholder="ReEnter Your Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    {pwError && <span className="text-red-500 text-sm">{pwError}</span>}
                  </div>

                  {/* Role */}
                  <div className="flex flex-col w-full space-y-[6px] md:space-y-[3px]">
                    <span className="text-[12px] md:text-[14px]">Select Your Role</span>
                    <Select value={role} onChange={handleRoleChange} options={["Doctor","Nurse","Patient"]} />
                  </div>

                  {/* Submit */}
                  <button
                    className="bg-[#6673FC] h-[32px] lg:h-[50px] font-productsans text-white w-full py-[8px] 2xl:py-[10px] text-[12px] md:text-[16px]"
                    type="submit"
                    disabled={!email || !password || !confirmPassword || !username}
                  >
                    REGISTER
                  </button>
                </div>
              </form>

              <h1 className="flex justify-center text-[10px] md:text-[14px]">or continue with</h1>

              {/* Social Buttons */}
              <div className="space-y-[12px] justify-center flex flex-col items-center">
                <div className="flex space-x-[5px] md:space-x-[8px]">
                  <button className="w-[68px] md:w-[106px] h-[30px] md:h-[46px] flex items-center justify-center rounded-[6px] md:rounded-[10px] border-[1px] md:border-[0.5px] border-black border-opacity-20 bg-white" onClick={() => window.location.href="https://www.google.com"}>
                    <img src="/images/login/google.png" alt="google" className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]" />
                  </button>
                  <button className="w-[68px] md:w-[106px] h-[30px] md:h-[46px] flex items-center justify-center rounded-[6px] md:rounded-[10px] border-[1px] md:border-[0.5px] border-black border-opacity-20 bg-white" onClick={handleAppleSignin}>
                    <img src="/images/login/apple.png" alt="apple" className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]" />
                  </button>
                  <button className="w-[68px] md:w-[106px] h-[30px] md:h-[46px] flex items-center justify-center rounded-[6px] md:rounded-[10px] border-[1px] md:border-[0.5px] border-black border-opacity-20 bg-white" onClick={() => window.location.href="https://www.facebook.com"}>
                    <img src="/images/login/Facebook.png" alt="facebook" className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]" />
                  </button>
                </div>
                <div className="flex text-[10px] md:text-[14px] gap-[10px]">
                  <h1 className="text-black opacity-50">If you haven’t an account?</h1>
                  <button className="text-[#6673FC] hover:text-[#ce8a4a]" onClick={() => navigate("/signin")}>Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full hidden lg:flex">
          <img src="/images/login/login.jpg" alt="Login Image" className="h-screen w-full" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
