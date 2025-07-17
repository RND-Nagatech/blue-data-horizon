import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  Settings, 
  Users, 
  Database,
  LogOut,
  Bell,
  ChevronDown,
  Package,
  Tags,
  DollarSign,
  FolderTree,
  ShoppingCart,
  Truck,
  Factory
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Master",
    icon: Database,
    isGroup: true,
    items: [
      {
        title: "Master Item",
        url: "/dashboard/master/item",
        icon: Package,
      },
      {
        title: "Master Group",
        url: "/dashboard/master/group",
        icon: FolderTree,
      },
      {
        title: "Master Price",
        url: "/dashboard/master/price",
        icon: DollarSign,
      },
      {
        title: "Master Category",
        url: "/dashboard/master/category",
        icon: Tags,
      },
    ]
  },
  {
    title: "Transaction",
    icon: ShoppingCart,
    isGroup: true,
    items: [
      {
        title: "Sales Order",
        url: "/dashboard/transaction/sales",
        icon: ShoppingCart,
      },
      {
        title: "Purchase Order",
        url: "/dashboard/transaction/purchase",
        icon: Truck,
      },
      {
        title: "Production Order",
        url: "/dashboard/transaction/production",
        icon: Factory,
      },
    ]
  },
  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  const isActive = (path: string) => currentPath === path;
  const isCollapsed = state === "collapsed";
  
  const isGroupActive = (items: any[]) => {
    return items.some(item => isActive(item.url));
  };

  const toggleGroup = (title: string) => {
    setOpenGroups(prev => 
      prev.includes(title) 
        ? prev.filter(group => group !== title)
        : [...prev, title]
    );
  };

  // Auto-expand groups that contain active items
  const getInitialOpenGroups = () => {
    return navigationItems
      .filter(item => item.isGroup && item.items && isGroupActive(item.items))
      .map(item => item.title);
  };

  // Initialize open groups on mount
  useEffect(() => {
    const initialGroups = getInitialOpenGroups();
    setOpenGroups(initialGroups);
  }, [currentPath]);

  return (
    <Sidebar className="border-r border-border/50 bg-white/80 backdrop-blur-sm" collapsible="icon">
      <SidebarContent className="bg-gradient-secondary">
        <div className="p-4">
          <div className="flex items-center gap-2 px-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-card">
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-semibold text-foreground">Admin Panel</h2>
                <p className="text-xs text-muted-foreground">Data Management</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => {
                if (item.isGroup && item.items) {
                  const isGroupExpanded = openGroups.includes(item.title);
                  const hasActiveChild = isGroupActive(item.items);
                  
                  return (
                    <SidebarMenuItem key={item.title}>
                      <Collapsible 
                        open={isGroupExpanded} 
                        onOpenChange={() => toggleGroup(item.title)}
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            className={`
                              flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 w-full
                              ${hasActiveChild 
                                ? "bg-gradient-secondary text-primary shadow-sm" 
                                : "text-foreground hover:bg-muted/50 hover:shadow-sm"
                              }
                            `}
                          >
                            <item.icon className="w-4 h-4 flex-shrink-0" />
                            {!isCollapsed && (
                              <>
                                <span className="text-sm font-medium flex-1 text-left">{item.title}</span>
                                <ChevronDown 
                                  className={`w-4 h-4 transition-transform duration-200 ${
                                    isGroupExpanded ? "rotate-180" : ""
                                  }`} 
                                />
                              </>
                            )}
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        
                        {!isCollapsed && (
                          <CollapsibleContent>
                            <SidebarMenuSub className="ml-4 mt-2 space-y-1">
                              {item.items.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.title}>
                                  <SidebarMenuSubButton asChild>
                                    <a
                                      href={subItem.url}
                                      className={`
                                        flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                                        ${isActive(subItem.url) 
                                          ? "bg-gradient-primary text-white shadow-card" 
                                          : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                                        }
                                      `}
                                    >
                                      <subItem.icon className="w-3 h-3 flex-shrink-0" />
                                      <span className="text-xs font-medium">{subItem.title}</span>
                                    </a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        )}
                      </Collapsible>
                    </SidebarMenuItem>
                  );
                } else {
                  // Regular menu item
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a
                          href={item.url}
                          className={`
                            flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                            ${isActive(item.url!) 
                              ? "bg-gradient-primary text-white shadow-card" 
                              : "text-foreground hover:bg-muted/50 hover:shadow-sm"
                            }
                          `}
                        >
                          <item.icon className="w-4 h-4 flex-shrink-0" />
                          {!isCollapsed && <span className="text-sm font-medium">{item.title}</span>}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          >
            <LogOut className="w-4 h-4" />
            {!isCollapsed && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

function DashboardHeader() {
  return (
    <header className="h-16 border-b border-border/50 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
          <div>
            <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
            <p className="text-xs text-muted-foreground">Welcome back, Admin</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Button>
          
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-medium shadow-card">
            A
          </div>
        </div>
      </div>
    </header>
  );
}

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;