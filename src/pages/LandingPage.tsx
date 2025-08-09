import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function LandingPage() {
    const [, setLocation] = useLocation();

    return (
        <div className="flex flex-col min-h-screen font-sans bg-background scroll-smooth">

        {/* Header */}
        <header className="sticky top-0 w-full bg-white/80 text-primary-foreground border-4 border-black shadow-[6px_6px_0px_black] z-50">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-4 px-4 sm:px-6">
            <h1 className="text-2xl bg-gray-600 text-white sm:text-3xl font-extrabold tracking-wide border-4 border-black px-3 py-1 shadow-[4px_4px_0px_black]">
                TaskBot
            </h1>
            <nav className="flex flex-wrap gap-4 sm:gap-6 text-base sm:text-lg text-black font-bold mt-4 sm:mt-0">
                <a className="hover:underline"
                onClick={(e) => {
                    e.preventDefault();
                    const offsetPosition = 0;

                    window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                    });
                }}
                >
                Home
                </a>
                <a href="#intro" className="hover:underline"
                onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById('intro');
                    if (!target) return;

                    const offset = 90; // adjust this value for your header height

                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                    });
                }}
                >
                About
                </a>
                <a href="#how" className="hover:underline"
                onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById('how');
                    if (!target) return;

                    const offset = 80; // adjust this value for your header height

                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                    });
                }}
                >
                How It Works
                </a>
            </nav>
            </div>
        </header>

        {/* Hero Section */}
        <section className="relative lg:min-h-[500px] py-8 flex-1 flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden border-t-4 border-b-4 border-black">
            <motion.div
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-pink-400 via-yellow-300 to-green-300 opacity-60"
            />

            <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
                x: 5,
                y: 5,
                boxShadow: "none",
                transition: {
                duration: 0.3
                }
            }}
            transition={{ 
                duration: 0.5,
                boxShadow: { duration: 1 }
            }}
            
            className="relative z-10 max-w-3xl w-full flex flex-col items-center border-4 border-black bg-card text-card-foreground px-4 sm:px-8 py-6 shadow-[8px_8px_0px_black]"
            >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Assistant ni <span className="bg-accent text-accent-foreground px-2 border-2 border-black">Zai</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl">
                Track assignments and announcements with ease. Store them in Google Sheets and get instant updates via Facebook Messenger.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <motion.button 
                className="bg-blue-400 px-8 py-2 border-4 border-black text-white font-bold shadow-[4px_4px_0px_black] hover:bg-blue-500"
                whileTap={{
                    x: 5,
                    y: 5,
                    boxShadow: "none",
                    transition: {
                    duration: 0.3
                    }
                }}
                onTap={() => {
                    setLocation('/assignment-form')
                }}
                >
                    Assignment
                </motion.button>

                <motion.button 
                className="bg-yellow-400 px-8 py-2 border-4 border-black text-black font-bold shadow-[4px_4px_0px_black] hover:bg-yellow-300"
                whileTap={{
                    x: 5,
                    y: 5,
                    boxShadow: "none",
                    transition: {
                    duration: 0.3
                    }
                }}
                onTap={() => {
                    setLocation('/birthday-form')
                }}
                >
                    Birthday
                </motion.button>
            </div>
            </motion.div>
        </section>

        {/* Intro Section */}
        <section id="intro" className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                x: 5,
                y: 5,
                boxShadow: "none",
                transition: {
                duration: 0.3
                }
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto border-4 border-black p-6 sm:p-8 bg-green-200 shadow-[6px_6px_0px_black]"
            >
            <h3 className="text-2xl sm:text-4xl font-bold mb-6">About</h3>
            <p className="leading-relaxed text-base sm:text-lg">
                TaskBot is zai's smart assistant for managing schoolwork. It connect inputs from the website directly to Google Sheets using n8n automation, then remind him of it through messenger. No more missed deadlines, no more scattered notes.
            </p>
            </motion.div>
        </section>

        {/* How to Use Section */}
        <section id="how" className="bg-yellow-200 py-16 sm:py-20 px-4 sm:px-6 border-t-4 border-b-4 border-black">
            <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-bold mb-10 text-center">How It Works</h3>
            <div className="flex sm:grid-cols-2 lg:grid-cols-4 gap-8 flex-wrap">
                {["Enter Data.", "Data syncs to Google Sheets via n8n.", "Get instant Messenger updates."].map((step, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileHover={{
                    x: 5,
                    y: 5,
                    boxShadow: "none",
                    transition: {
                        duration: 0.3
                    }
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white shrink-0 grow w-[200px] basis-1 border-4 border-black p-6 shadow-[4px_4px_0px_black] text-center"
                >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-300 border-4 border-black rounded-full mb-4 text-base sm:text-lg font-bold mx-auto">
                    {i + 1}
                    </div>
                    <p className="text-base sm:text-lg">{step}</p>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-black text-white py-8 sm:py-10 text-center border-t-4 border-black px-4">
            <p className="mb-2 text-sm sm:text-base">&copy; {new Date().getFullYear()} TaskBot. All rights reserved.</p>
            <p className="text-sm sm:text-base"></p>
        </footer>
        </div>
    );

}
