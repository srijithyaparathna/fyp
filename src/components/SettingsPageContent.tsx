"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const SettingsPageContent: React.FC = () => {
  return (
    <div className="p-3 flex justify-center ">
      <Card className="w-full max-w-6xl shadow-lg rounded-2xl  bg-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            ⚙️ System Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 ">

            {/* General Settings */}
            {/* <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">General Settings</h2>
              <div>
                <label className="block text-sm font-medium">Device Name</label>
                <Input placeholder="Infant Incubator #1" />
              </div>
              <div>
                <label className="block text-sm font-medium">Ward / Location</label>
                <Input placeholder="NICU - Room 3" />
              </div>
              <div>
                <label className="block text-sm font-medium">Temperature Unit</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="°C" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="C">Celsius (°C)</SelectItem>
                    <SelectItem value="F">Fahrenheit (°F)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </section> */}

            {/* Camera Settings */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">Camera Settings</h2>
              <div className="flex justify-between items-center py-1">
                <span>Enable Camera Feed</span>
                <Switch />
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Night Vision Mode</span>
                <Switch />
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Audio Stream</span>
                <Switch />
              </div>
              <div>
                <label className="block text-sm font-medium">Video Quality</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="High" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </section>

            {/* Alert Settings */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">Alert & Notification</h2>
              {["Temperature", "Humidity", "Oxygen", "Device Disconnection"].map((item) => (
                <div key={item} className="flex justify-between items-center py-1">
                  <span>Enable {item} Alerts</span>
                  <Switch />
                </div>
              ))}
            </section>

            {/* User Preferences */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">User Preferences</h2>
              <div className="flex justify-between items-center py-1">
                <span>Dark Mode</span>
                <Switch />
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Enable Alert Sound</span>
                <Switch />
              </div>
              <div>
                <label className="block text-sm font-medium">Language</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="English" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="si">Sinhala</SelectItem>
                    <SelectItem value="ta">Tamil</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </section>

            {/* Account Section */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">Account & Access</h2>
              <Button variant="outline" className="w-full">Change Password</Button>
              <Button variant="outline" className="w-full">Manage Users</Button>
              <Button variant="destructive" className="w-full">Logout</Button>
            </section>

          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPageContent;
