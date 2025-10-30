import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

interface Profile {
  id: number;
  name: string;
  role: string;
  nic: string;
  phoneNumber: string;
  username: string;
  email?: string;
}

export default function MyAccountPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Unauthorized! Please log in again.");
          return;
        }

        const res = await fetch("http://localhost:5000/api/auth/me", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          const errData = await res.json();
          alert(errData.message || "Failed to fetch user data");
          return;
        }

        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error("Error fetching user:", err);
        alert("Error fetching user information.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!profile) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">No user found.</div>;
  }

  return (
  
    <div className="flex justify-center items-center bg-gradient-to-br from-blue-50 to-gray-100 ">
      <Card className="w-full ">
        <CardHeader className="flex flex-col items-center text-center ">
          {/* Profile Icon */}
          <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <User className="w-16 h-16 text-blue-600" />
          </div>

          {/* Name + Username */}
          <CardTitle className="text-2xl font-semibold text-gray-800">{profile.name || "Unnamed User"}</CardTitle>
          <p className="text-gray-500 text-sm">@{profile.username}</p>

          {/* Role Badge */}
          <span className="mt-3 px-4 py-1 text-sm bg-blue-50 text-blue-600 rounded-full font-medium">
            {profile.role || "USER"}
          </span>
        </CardHeader>

        {/* Profile Info Section */}
        <CardContent className="grid grid-cols-1 gap-6  w-full  justify-center items-center">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-base font-medium">{profile.name || "—"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Username</p>
            <p className="text-base font-medium">{profile.username || "—"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">NIC</p>
            <p className="text-base font-medium">{profile.nic || "—"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="text-base font-medium">{profile.phoneNumber || "—"}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
