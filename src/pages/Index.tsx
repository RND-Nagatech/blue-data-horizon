import { Button } from "@/components/ui/button";
import { Shield, BarChart3, Database } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      <div className="text-center max-w-2xl">
        <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow mb-6">
          <Shield className="w-8 h-8 text-white" />
        </div>
        
        <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Professional data management platform with modern design and powerful reporting capabilities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => window.location.href = '/login'}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-[1.05] px-8 py-3 text-base"
          >
            Access Dashboard
          </Button>
          
          <Button
            variant="outline"
            className="border-primary/20 hover:bg-gradient-secondary transition-all duration-300 px-8 py-3 text-base"
          >
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-card hover:shadow-glow transition-all duration-300">
            <Database className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Data Management</h3>
            <p className="text-sm text-muted-foreground">Efficiently store and organize your data with our intuitive interface.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-card hover:shadow-glow transition-all duration-300">
            <BarChart3 className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Advanced Reporting</h3>
            <p className="text-sm text-muted-foreground">Generate comprehensive reports with powerful analytics tools.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-card hover:shadow-glow transition-all duration-300">
            <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Secure Access</h3>
            <p className="text-sm text-muted-foreground">Enterprise-grade security with role-based access control.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
