import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import smitLogo from "@/assets/smit-logo.png";

const LoginPage = () => {
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, you'd validate credentials
    if (cnic && password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userType", isTeacher ? "teacher" : "student");
      localStorage.setItem("userCnic", cnic);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-smit-gray-50 to-smit-blue-light flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="text-center">
          <img 
            src={smitLogo} 
            alt="SMIT Logo" 
            className="mx-auto h-16 w-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-smit-gray-900 mb-2">Student Portal</h1>
        </div>

        {/* Login Form */}
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-smit-gray-100">
                <TabsTrigger 
                  value="login" 
                  className="data-[state=active]:bg-white data-[state=active]:text-smit-blue"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger 
                  value="create" 
                  className="data-[state=active]:bg-white data-[state=active]:text-smit-blue"
                >
                  Create a Password
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="mt-6">
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-lg font-semibold text-smit-gray-900 mb-2">Login</h2>
                      <p className="text-sm text-smit-gray-500 mb-4">
                        Kindly provide the CNIC number and password used during SMIT course registration.
                      </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                      <div>
                        <label htmlFor="cnic" className="block text-sm font-medium text-smit-gray-900 mb-1">
                          CNIC *
                        </label>
                        <Input
                          id="cnic"
                          type="text"
                          placeholder="Enter your CNIC"
                          value={cnic}
                          onChange={(e) => setCnic(e.target.value)}
                          required
                          className="border-gray-300 focus:border-smit-blue focus:ring-smit-blue"
                        />
                      </div>

                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-smit-gray-900 mb-1">
                          Password *
                        </label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="border-gray-300 focus:border-smit-blue focus:ring-smit-blue"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        variant="smit" 
                        className="w-full py-3 text-base font-medium"
                      >
                        LOGIN
                      </Button>
                    </form>

                    <div className="text-center pt-2">
                      <button
                        onClick={() => setIsTeacher(!isTeacher)}
                        className={`text-sm transition-colors ${
                          isTeacher 
                            ? 'text-smit-blue font-medium' 
                            : 'text-smit-gray-500 hover:text-smit-blue'
                        }`}
                      >
                        {isTeacher ? '← Back to Student Login' : 'Login as teacher →'}
                      </button>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="create" className="mt-6">
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-lg font-semibold text-smit-gray-900 mb-2">Create Password</h2>
                      <p className="text-sm text-smit-gray-500 mb-4">
                        Create a new password for your SMIT account.
                      </p>
                    </div>

                    <form className="space-y-4">
                      <div>
                        <label htmlFor="new-cnic" className="block text-sm font-medium text-smit-gray-900 mb-1">
                          CNIC *
                        </label>
                        <Input
                          id="new-cnic"
                          type="text"
                          placeholder="Enter your CNIC"
                          className="border-gray-300 focus:border-smit-blue focus:ring-smit-blue"
                        />
                      </div>

                      <div>
                        <label htmlFor="new-password" className="block text-sm font-medium text-smit-gray-900 mb-1">
                          New Password *
                        </label>
                        <Input
                          id="new-password"
                          type="password"
                          placeholder="Create new password"
                          className="border-gray-300 focus:border-smit-blue focus:ring-smit-blue"
                        />
                      </div>

                      <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-smit-gray-900 mb-1">
                          Confirm Password *
                        </label>
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="Confirm new password"
                          className="border-gray-300 focus:border-smit-blue focus:ring-smit-blue"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        variant="smit" 
                        className="w-full py-3 text-base font-medium"
                      >
                        CREATE PASSWORD
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;