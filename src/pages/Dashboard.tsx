import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Database, FileText, TrendingUp, Users, Activity } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Records",
      value: "12,847",
      change: "+12.5%",
      trend: "up",
      icon: Database,
    },
    {
      title: "New Entries Today",
      value: "147",
      change: "+5.2%",
      trend: "up",
      icon: FileText,
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+18.1%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Data Processing",
      value: "98.5%",
      change: "+2.3%",
      trend: "up",
      icon: Activity,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground mt-2">
          Welcome to your admin dashboard. Here's what's happening with your data today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card 
            key={stat.title} 
            className="shadow-card border-0 bg-white/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="p-2 bg-gradient-secondary rounded-lg">
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <TrendingUp className="h-3 w-3 mr-1 text-primary" />
                <span className="text-primary font-medium">{stat.change}</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest data processing activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { action: "Data Import Completed", time: "2 minutes ago", status: "success" },
                { action: "Report Generated", time: "15 minutes ago", status: "success" },
                { action: "User Registration", time: "1 hour ago", status: "info" },
                { action: "Database Backup", time: "3 hours ago", status: "success" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-primary' : 'bg-muted-foreground'
                  }`}></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full p-3 text-left rounded-lg bg-gradient-secondary hover:bg-gradient-primary hover:text-white transition-all duration-200 group">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-primary group-hover:text-white" />
                <div>
                  <p className="text-sm font-medium">Add New Entry</p>
                  <p className="text-xs text-muted-foreground group-hover:text-white/80">Create a new data record</p>
                </div>
              </div>
            </button>
            
            <button className="w-full p-3 text-left rounded-lg bg-gradient-secondary hover:bg-gradient-primary hover:text-white transition-all duration-200 group">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-4 w-4 text-primary group-hover:text-white" />
                <div>
                  <p className="text-sm font-medium">Generate Report</p>
                  <p className="text-xs text-muted-foreground group-hover:text-white/80">Create analytics report</p>
                </div>
              </div>
            </button>
            
            <button className="w-full p-3 text-left rounded-lg bg-gradient-secondary hover:bg-gradient-primary hover:text-white transition-all duration-200 group">
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-primary group-hover:text-white" />
                <div>
                  <p className="text-sm font-medium">Manage Users</p>
                  <p className="text-xs text-muted-foreground group-hover:text-white/80">Add or edit user accounts</p>
                </div>
              </div>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;