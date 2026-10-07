import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import LocationPage from "./pages/LocationPage";
import LocalServicePage from "./pages/LocalServicePage";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/plataforma-360"><ServicePage kind="plataforma" /></Route><Route path="/espelho-magico"><ServicePage kind="espelho" /></Route><Route path="/robo-bumblebee"><ServicePage kind="robo" /></Route><Route path="/plataforma-360-maringa"><LocalServicePage kind="plataformaMaringa" /></Route><Route path="/plataforma-360-londrina"><LocalServicePage kind="plataformaLondrina" /></Route><Route path="/espelho-magico-maringa"><LocalServicePage kind="espelhoMaringa" /></Route><Route path="/espelho-magico-londrina"><LocalServicePage kind="espelhoLondrina" /></Route><Route path="/atracoes-casamento-maringa"><LocalServicePage kind="casamentoMaringa" /></Route><Route path="/atracoes-15-anos-londrina"><LocalServicePage kind="quinzeLondrina" /></Route><Route path="/maringa"><LocationPage city="maringa" /></Route><Route path="/londrina"><LocationPage city="londrina" /></Route><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

export default App;
