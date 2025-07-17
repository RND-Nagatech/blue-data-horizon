import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            
            {/* Master Routes */}
            <Route path="master/item" element={<div className="p-6">Master Item Page - Coming Soon</div>} />
            <Route path="master/group" element={<div className="p-6">Master Group Page - Coming Soon</div>} />
            <Route path="master/price" element={<div className="p-6">Master Price Page - Coming Soon</div>} />
            <Route path="master/category" element={<div className="p-6">Master Category Page - Coming Soon</div>} />
            
            {/* Transaction Routes */}
            <Route path="transaction/sales" element={<div className="p-6">Sales Order Page - Coming Soon</div>} />
            <Route path="transaction/purchase" element={<div className="p-6">Purchase Order Page - Coming Soon</div>} />
            <Route path="transaction/production" element={<div className="p-6">Production Order Page - Coming Soon</div>} />
            
            {/* Other Routes */}
            <Route path="reports" element={<div className="p-6">Reports Page - Coming Soon</div>} />
            <Route path="users" element={<div className="p-6">Users Page - Coming Soon</div>} />
            <Route path="settings" element={<div className="p-6">Settings Page - Coming Soon</div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
