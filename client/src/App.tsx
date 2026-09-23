import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import LocationPage from "./pages/LocationPage";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/plataforma-360"><ServicePage kind="plataforma" /></Route><Route path="/espelho-magico"><ServicePage kind="espelho" /></Route><Route path="/robo-bumblebee"><ServicePage kind="robo" /></Route><Route path="/maringa"><LocationPage city="maringa" /></Route><Route path="/londrina"><LocationPage city="londrina" /></Route><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

export default App;
