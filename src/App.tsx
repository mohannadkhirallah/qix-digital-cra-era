import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/shared/i18n/LanguageContext";
import { MainLayout } from "@/presentation/layout/MainLayout";
import { HomePage } from "@/presentation/pages/Home/HomePage";
import { AboutPage } from "@/presentation/pages/About/AboutPage";
import { WhyPeerPage } from "@/presentation/pages/WhyPeer/WhyPeerPage";
import { ParticipantsPage } from "@/presentation/pages/Participants/ParticipantsPage";
import { ConnectPage } from "@/presentation/pages/Connect/ConnectPage";
import { PoliciesPage } from "@/presentation/pages/Policies/PoliciesPage";
import { NotFoundPage } from "@/presentation/pages/NotFound/NotFoundPage";

// Placeholder pages - to be implemented
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-32 pb-16">
    <div className="section-container">
      <div className="mx-auto max-w-3xl text-center py-20">
        <h1 className="mb-4 text-3xl font-bold text-foreground">{title}</h1>
        <p className="text-muted-foreground">This page is under construction.</p>
      </div>
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
              <Route path="/about" element={<AboutPage />} />
              <Route path="/why-peer" element={<WhyPeerPage />} />
              <Route path="/participants" element={<ParticipantsPage />} />
              <Route path="/connect" element={<ConnectPage />} />
              <Route path="/policies" element={<PoliciesPage />} />
              <Route path="/resources" element={<PlaceholderPage title="Resources & Documents" />} />
              <Route path="/contact" element={<PlaceholderPage title="Contact & NOC" />} />
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
              <Route path="/terms" element={<PlaceholderPage title="Terms of Use" />} />
              <Route path="/accessibility" element={<PlaceholderPage title="Accessibility Statement" />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
