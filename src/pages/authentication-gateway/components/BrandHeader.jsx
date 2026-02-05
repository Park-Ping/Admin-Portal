const BrandHeader = () => {
  return (
    <div className="text-center mb-8">
      {/* Logo */}
      <div className="flex justify-center mb-4 md:mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10">
          <img
            src="/logo.png"
            alt="ParkPing Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
        ParkPing Admin
      </h1>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-muted-foreground">
        Secure access to your command center
      </p>
    </div>
  );
};

export default BrandHeader;
