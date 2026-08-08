import { Routes, Route } from "react-router-dom";
import { RootLayout, NotFound, ErrorBoundary } from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Speakers from "@/pages/Speakers";
import Tracks from "@/pages/Tracks";
import Schedule from "@/pages/Schedule";
import Sponsors from "@/pages/Sponsors";
import Registration from "@/pages/Registration";
import SubmitAbstract from "@/pages/SubmitAbstract";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/submit-abstract" element={<SubmitAbstract />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
