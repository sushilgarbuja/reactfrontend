function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Coding Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>


        </section>
    );
}

export default HeroSection;
