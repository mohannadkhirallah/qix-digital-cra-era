import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/shared/i18n/LanguageContext";
import { MainLayout } from "@/presentation/layout/MainLayout";
import { HomePage } from "@/presentation/pages/Home/HomePage";
import { NotFoundPage } from "@/presentation/pages/NotFound/NotFoundPage";

// Placeholder pages - to be implemented
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="section-container py-16">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="mb-4 text-3xl font-bold text-foreground">{title}</h1>
      <p className="text-muted-foreground">This page is under construction.</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<PlaceholderPage title="About QIX" />} />
              <Route path="/why-peer" element={<PlaceholderPage title="Why Peer With QIX" />} />
              <Route path="/participants" element={<PlaceholderPage title="Participants & Partners" />} />
              <Route path="/connect" element={<PlaceholderPage title="How to Connect" />} />
              <Route path="/policies" element={<PlaceholderPage title="Policies & Governance" />} />
              <Route path="/resources" element={<PlaceholderPage title="Resources & Documents" />} />
              <Route path="/contact" element={<PlaceholderPage title="Contact & NOC" />} />
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
              <Route path="/terms" element={<PlaceholderPage title="Terms of Use" />} />
              <Route path="/accessibility" element={<PlaceholderPage title="Accessibility Statement" />} />
              {/* Catch-all route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
