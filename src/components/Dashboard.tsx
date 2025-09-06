import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  ClipboardList, 
  GraduationCap, 
  Calendar, 
  User, 
  Bell, 
  LogOut,
  FileText,
  Award,
  Clock,
  Download,
  Eye
} from "lucide-react";
import smitLogo from "@/assets/smit-logo.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userCnic, setUserCnic] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/");
      return;
    }
    setUserCnic(localStorage.getItem("userCnic") || "");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userType");
    localStorage.removeItem("userCnic");
    navigate("/");
  };

  // Mock data for dashboard
  const courses = [
    {
      id: 1,
      title: "Web and Mobile App Development",
      instructor: "Sir Ahmed Hassan",
      progress: 75,
      status: "In Progress",
      nextClass: "Tomorrow, 10:00 AM"
    },
    {
      id: 2,
      title: "Graphic Designing",
      instructor: "Sir Ali Raza",
      progress: 45,
      status: "In Progress",
      nextClass: "Friday, 2:00 PM"
    }
  ];

  const assignments = [
    {
      id: 1,
      title: "React Portfolio Project",
      course: "Web Development",
      dueDate: "2024-01-15",
      status: "Pending",
      marks: null
    },
    {
      id: 2,
      title: "UI/UX Design Mockup",
      course: "Graphic Designing",
      dueDate: "2024-01-10",
      status: "Submitted",
      marks: 85
    },
    {
      id: 3,
      title: "JavaScript Fundamentals Quiz",
      course: "Web Development",
      dueDate: "2024-01-08",
      status: "Graded",
      marks: 92
    }
  ];

  const notifications = [
    {
      id: 1,
      title: "New Assignment Posted",
      message: "React Portfolio Project has been assigned",
      time: "2 hours ago",
      type: "assignment"
    },
    {
      id: 2,
      title: "Grade Updated",
      message: "Your JavaScript Quiz has been graded: 92/100",
      time: "1 day ago",
      type: "grade"
    },
    {
      id: 3,
      title: "Class Reminder",
      message: "Web Development class tomorrow at 10:00 AM",
      time: "1 day ago",
      type: "reminder"
    }
  ];

  return (
    <div className="min-h-screen bg-smit-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-smit-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img src={smitLogo} alt="SMIT Logo" className="h-8 w-auto" />
              <h1 className="text-xl font-semibold text-smit-gray-900">Student Portal</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-smit-gray-500 hover:text-smit-blue cursor-pointer" />
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-smit-blue text-white text-sm">
                  {userCnic.slice(-2)}
                </AvatarFallback>
              </Avatar>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout}
                className="text-smit-gray-500 hover:text-smit-blue"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-smit-gray-900 mb-2">Welcome back!</h2>
          <p className="text-smit-gray-500">Here's what's happening with your courses today.</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-6 lg:w-fit bg-white border border-smit-gray-100">
            {/* MODIFICATION HERE: Added data-state for active styles */}
            <TabsTrigger value="overview" className="flex items-center gap-2 hover:bg-smit-blue-light hover:text-smit-blue transition-colors data-[state=active]:bg-smit-blue data-[state=active]:text-white">
              <BookOpen className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2 hover:bg-smit-blue-light hover:text-smit-blue transition-colors data-[state=active]:bg-smit-blue data-[state=active]:text-white">
              <GraduationCap className="h-4 w-4" />
              Courses
            </TabsTrigger>
            <TabsTrigger value="assignments" className="flex items-center gap-2 hover:bg-smit-blue-light hover:text-smit-blue transition-colors data-[state=active]:bg-smit-blue data-[state=active]:text-white">
              <ClipboardList className="h-4 w-4" />
              Assignments
            </TabsTrigger>
            <TabsTrigger value="grades" className="flex items-center gap-2 hover:bg-smit-blue-light hover:text-smit-blue transition-colors data-[state=active]:bg-smit-blue data-[state=active]:text-white">
              <Award className="h-4 w-4" />
              Grades
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center gap-2 hover:bg-smit-blue-light hover:text-smit-blue transition-colors data-[state=active]:bg-smit-blue data-[state=active]:text-white">
              <Calendar className="h-4 w-4" />
              Schedule
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2 hover:bg-smit-blue-light hover:text-smit-blue transition-colors data-[state=active]:bg-smit-blue data-[state=active]:text-white">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Stats Cards */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                  <BookOpen className="h-4 w-4 text-smit-blue" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-smit-blue">2</div>
                  <p className="text-xs text-smit-gray-500">Currently enrolled</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Assignments Due</CardTitle>
                  <ClipboardList className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">1</div>
                  <p className="text-xs text-smit-gray-500">This week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
                  <Award className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">85%</div>
                  <p className="text-xs text-smit-gray-500">Average completion</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-smit-blue" />
                    Recent Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {notifications.slice(0, 3).map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-3 p-3 rounded-lg bg-smit-gray-50">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-smit-gray-900">{notification.title}</p>
                        <p className="text-sm text-smit-gray-500 truncate">{notification.message}</p>
                        <p className="text-xs text-smit-gray-500 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-smit-blue" />
                    Upcoming Classes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-3 rounded-lg bg-smit-gray-50">
                      <div>
                        <p className="text-sm font-medium text-smit-gray-900">{course.title}</p>
                        <p className="text-sm text-smit-gray-500">{course.instructor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-smit-blue">{course.nextClass}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <p className="text-smit-gray-500">{course.instructor}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant={course.status === "In Progress" ? "default" : "secondary"}>
                        {course.status}
                      </Badge>
                      <p className="text-sm text-smit-gray-500">Next: {course.nextClass}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="smit" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="smit-outline" size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Resources
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-4 rounded-lg border border-smit-gray-100">
                      <div className="flex-1">
                        <h3 className="font-medium text-smit-gray-900">{assignment.title}</h3>
                        <p className="text-sm text-smit-gray-500">{assignment.course}</p>
                        <p className="text-sm text-smit-gray-500">Due: {assignment.dueDate}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge 
                          variant={
                            assignment.status === "Pending" ? "destructive" :
                            assignment.status === "Submitted" ? "secondary" : "default"
                          }
                        >
                          {assignment.status}
                        </Badge>
                        {assignment.marks && (
                          <div className="text-right">
                            <p className="text-lg font-bold text-smit-blue">{assignment.marks}/100</p>
                          </div>
                        )}
                        <Button variant="smit-outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          {assignment.status === "Pending" ? "Submit" : "View"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Grades Tab */}
          <TabsContent value="grades" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Grade Report</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {courses.map((course) => (
                    <div key={course.id} className="border border-smit-gray-100 rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-4">{course.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-smit-gray-50 rounded-lg">
                          <p className="text-2xl font-bold text-smit-blue">A-</p>
                          <p className="text-sm text-smit-gray-500">Current Grade</p>
                        </div>
                        <div className="text-center p-4 bg-smit-gray-50 rounded-lg">
                          <p className="text-2xl font-bold text-green-600">88%</p>
                          <p className="text-sm text-smit-gray-500">Overall Score</p>
                        </div>
                        <div className="text-center p-4 bg-smit-gray-50 rounded-lg">
                          <p className="text-2xl font-bold text-orange-600">5</p>
                          <p className="text-sm text-smit-gray-500">Assignments</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                    <div key={day} className="border border-smit-gray-100 rounded-lg p-4">
                      <h3 className="font-medium text-smit-gray-900 mb-3">{day}</h3>
                      <div className="space-y-2">
                        {day === 'Monday' || day === 'Wednesday' || day === 'Friday' ? (
                          <div className="flex items-center justify-between p-3 bg-smit-blue-light rounded-lg">
                            <div>
                              <p className="font-medium text-smit-blue">Web Development</p>
                              <p className="text-sm text-smit-gray-500">Sir Ahmed Hassan</p>
                            </div>
                            <p className="text-sm font-medium text-smit-blue">10:00 AM - 1:00 PM</p>
                          </div>
                        ) : day === 'Tuesday' || day === 'Thursday' ? (
                          <div className="flex items-center justify-between p-3 bg-smit-blue-light rounded-lg">
                            <div>
                              <p className="font-medium text-smit-blue">Graphic Designing</p>
                              <p className="text-sm text-smit-gray-500">Sir Ali Raza</p>
                            </div>
                            <p className="text-sm font-medium text-smit-blue">2:00 PM - 5:00 PM</p>
                          </div>
                        ) : (
                          <p className="text-sm text-smit-gray-500 italic">No classes scheduled</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-smit-blue text-white text-lg">
                      {userCnic.slice(-2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-smit-gray-900">Student #{userCnic}</h3>
                    <p className="text-smit-gray-500">SMIT Student</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-smit-gray-900 mb-3">Personal Information</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-smit-gray-500">CNIC</p>
                        <p className="font-medium">{userCnic}</p>
                      </div>
                      <div>
                        <p className="text-sm text-smit-gray-500">Batch</p>
                        <p className="font-medium">Batch 11</p>
                      </div>
                      <div>
                        <p className="text-sm text-smit-gray-500">Enrollment Date</p>
                        <p className="font-medium">September 2023</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-smit-gray-900 mb-3">Academic Status</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-smit-gray-500">Status</p>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                      <div>
                        <p className="text-sm text-smit-gray-500">Overall GPA</p>
                        <p className="font-medium">3.7/4.0</p>
                      </div>
                      <div>
                        <p className="text-sm text-smit-gray-500">Completed Credits</p>
                        <p className="font-medium">45/60</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;