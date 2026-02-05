import Icon from '../../../components/AppIcon';

const BrandHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 mb-4 md:mb-6">
        <Icon name="ParkingCircle" size={40} color="var(--color-primary)" />
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
        ParkPing Admin
      </h1>
      <p className="text-sm md:text-base text-muted-foreground">
        Secure access to your command center
      </p>
    </div>
  );
};

export default BrandHeader;