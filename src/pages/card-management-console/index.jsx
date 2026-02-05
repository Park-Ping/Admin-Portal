import { useState } from 'react';

import Button from '../../components/ui/Button';
import CardFilters from './components/CardFilters';
import CardStatsOverview from './components/CardStatsOverview';
import CardTable from './components/CardTable';
import BulkActionsBar from './components/BulkActionsBar';
import CardDetailsModal from './components/CardDetailsModal';
import StatusChangeModal from './components/StatusChangeModal';
import QuickActions from './components/QuickActions';

const CardManagementConsole = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [filteredCards, setFilteredCards] = useState([]);

  const stats = {
    totalCards: 2847,
    activeCards: 2156,
    pendingCards: 234,
    expiredCards: 457
  };

  const mockCards = [
  {
    id: 1,
    cardId: 'PP-2026-001234',
    ownerName: 'Rajesh Kumar',
    ownerPhone: '+91 98765 43210',
    ownerEmail: 'rajesh.kumar@email.com',
    ownerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b09cae8d-1763295945796.png",
    ownerAvatarAlt: 'Professional headshot of Indian man with short black hair wearing blue shirt',
    vehicleNumber: 'DL-01-AB-1234',
    vehicleModel: 'Honda City 2023',
    vehicleColor: 'Silver',
    planType: 'Premium Plan',
    planPrice: '₹599',
    status: 'active',
    activationDate: '15/01/2026',
    expiryDate: '15/01/2027',
    lastActivity: '2 hours ago'
  },
  {
    id: 2,
    cardId: 'PP-2026-001235',
    ownerName: 'Priya Sharma',
    ownerPhone: '+91 98765 43211',
    ownerEmail: 'priya.sharma@email.com',
    ownerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1dc96d634-1763295460493.png",
    ownerAvatarAlt: 'Professional headshot of Indian woman with long black hair wearing red traditional attire',
    vehicleNumber: 'DL-02-CD-5678',
    vehicleModel: 'Maruti Swift 2024',
    vehicleColor: 'Red',
    planType: 'Basic Plan',
    planPrice: '₹299',
    status: 'active',
    activationDate: '16/01/2026',
    expiryDate: '16/01/2027',
    lastActivity: '5 hours ago'
  },
  {
    id: 3,
    cardId: 'PP-2026-001236',
    ownerName: 'Amit Patel',
    ownerPhone: '+91 98765 43212',
    ownerEmail: 'amit.patel@email.com',
    ownerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_175c23d08-1763295860347.png",
    ownerAvatarAlt: 'Professional headshot of Indian man with glasses and formal black suit',
    vehicleNumber: 'MH-12-EF-9012',
    vehicleModel: 'Hyundai Creta 2025',
    vehicleColor: 'White',
    planType: 'Enterprise Plan',
    planPrice: '₹999',
    status: 'pending',
    activationDate: '18/01/2026',
    expiryDate: '18/01/2027',
    lastActivity: '1 day ago'
  },
  {
    id: 4,
    cardId: 'PP-2026-001237',
    ownerName: 'Sneha Reddy',
    ownerPhone: '+91 98765 43213',
    ownerEmail: 'sneha.reddy@email.com',
    ownerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f43e8dd2-1763297914049.png",
    ownerAvatarAlt: 'Professional headshot of Indian woman with short hair wearing green business suit',
    vehicleNumber: 'KA-03-GH-3456',
    vehicleModel: 'Toyota Fortuner 2024',
    vehicleColor: 'Black',
    planType: 'Premium Plan',
    planPrice: '₹599',
    status: 'active',
    activationDate: '14/01/2026',
    expiryDate: '14/01/2027',
    lastActivity: '3 hours ago'
  },
  {
    id: 5,
    cardId: 'PP-2026-001238',
    ownerName: 'Vikram Singh',
    ownerPhone: '+91 98765 43214',
    ownerEmail: 'vikram.singh@email.com',
    ownerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e0b28c40-1763292603761.png",
    ownerAvatarAlt: 'Professional headshot of Indian man with beard wearing white traditional kurta',
    vehicleNumber: 'RJ-14-IJ-7890',
    vehicleModel: 'Mahindra Thar 2025',
    vehicleColor: 'Blue',
    planType: 'Basic Plan',
    planPrice: '₹299',
    status: 'suspended',
    activationDate: '10/01/2026',
    expiryDate: '10/01/2027',
    lastActivity: '1 week ago'
  },
  {
    id: 6,
    cardId: 'PP-2026-001239',
    ownerName: 'Ananya Iyer',
    ownerPhone: '+91 98765 43215',
    ownerEmail: 'ananya.iyer@email.com',
    ownerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19d9d7cd2-1763293467118.png",
    ownerAvatarAlt: 'Professional headshot of Indian woman with long hair wearing yellow saree',
    vehicleNumber: 'TN-09-KL-2345',
    vehicleModel: 'Tata Nexon EV 2024',
    vehicleColor: 'Green',
    planType: 'Premium Plan',
    planPrice: '₹599',
    status: 'active',
    activationDate: '17/01/2026',
    expiryDate: '17/01/2027',
    lastActivity: '4 hours ago'
  },
  {
    id: 7,
    cardId: 'PP-2026-001240',
    ownerName: 'Karan Malhotra',
    ownerPhone: '+91 98765 43216',
    ownerEmail: 'karan.malhotra@email.com',
    ownerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1aad7fbce-1763293266966.png",
    ownerAvatarAlt: 'Professional headshot of Indian man with styled hair wearing gray blazer',
    vehicleNumber: 'PB-10-MN-6789',
    vehicleModel: 'BMW 3 Series 2025',
    vehicleColor: 'Gray',
    planType: 'Enterprise Plan',
    planPrice: '₹999',
    status: 'active',
    activationDate: '12/01/2026',
    expiryDate: '12/01/2027',
    lastActivity: '6 hours ago'
  },
  {
    id: 8,
    cardId: 'PP-2026-001241',
    ownerName: 'Divya Nair',
    ownerPhone: '+91 98765 43217',
    ownerEmail: 'divya.nair@email.com',
    ownerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6fb5b93-1763295822773.png",
    ownerAvatarAlt: 'Professional headshot of Indian woman with curly hair wearing pink formal dress',
    vehicleNumber: 'KL-07-OP-4567',
    vehicleModel: 'Kia Seltos 2024',
    vehicleColor: 'Orange',
    planType: 'Basic Plan',
    planPrice: '₹299',
    status: 'expired',
    activationDate: '05/01/2025',
    expiryDate: '05/01/2026',
    lastActivity: '2 weeks ago'
  },
  {
    id: 9,
    cardId: 'PP-2026-001242',
    ownerName: 'Arjun Kapoor',
    ownerPhone: '+91 98765 43218',
    ownerEmail: 'arjun.kapoor@email.com',
    ownerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13b3e6533-1763292504789.png",
    ownerAvatarAlt: 'Professional headshot of Indian man with clean shave wearing navy blue suit',
    vehicleNumber: 'UP-16-QR-8901',
    vehicleModel: 'Audi A4 2025',
    vehicleColor: 'Black',
    planType: 'Enterprise Plan',
    planPrice: '₹999',
    status: 'active',
    activationDate: '13/01/2026',
    expiryDate: '13/01/2027',
    lastActivity: '1 hour ago'
  },
  {
    id: 10,
    cardId: 'PP-2026-001243',
    ownerName: 'Meera Desai',
    ownerPhone: '+91 98765 43219',
    ownerEmail: 'meera.desai@email.com',
    ownerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15114c8f2-1763293742035.png",
    ownerAvatarAlt: 'Professional headshot of Indian woman with straight hair wearing purple business attire',
    vehicleNumber: 'GJ-01-ST-1234',
    vehicleModel: 'Volkswagen Polo 2024',
    vehicleColor: 'White',
    planType: 'Premium Plan',
    planPrice: '₹599',
    status: 'pending',
    activationDate: '19/01/2026',
    expiryDate: '19/01/2027',
    lastActivity: '8 hours ago'
  },
  {
    id: 11,
    cardId: 'PP-2026-001244',
    ownerName: 'Rohan Verma',
    ownerPhone: '+91 98765 43220',
    ownerEmail: 'rohan.verma@email.com',
    ownerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13cdf0bc2-1763296311463.png",
    ownerAvatarAlt: 'Professional headshot of Indian man with mustache wearing brown leather jacket',
    vehicleNumber: 'HR-26-UV-5678',
    vehicleModel: 'Jeep Compass 2025',
    vehicleColor: 'Brown',
    planType: 'Basic Plan',
    planPrice: '₹299',
    status: 'active',
    activationDate: '11/01/2026',
    expiryDate: '11/01/2027',
    lastActivity: '12 hours ago'
  },
  {
    id: 12,
    cardId: 'PP-2026-001245',
    ownerName: 'Kavya Menon',
    ownerPhone: '+91 98765 43221',
    ownerEmail: 'kavya.menon@email.com',
    ownerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1bac9c5b2-1763295471265.png",
    ownerAvatarAlt: 'Professional headshot of Indian woman with wavy hair wearing teal colored dress',
    vehicleNumber: 'AP-09-WX-9012',
    vehicleModel: 'Nissan Magnite 2024',
    vehicleColor: 'Silver',
    planType: 'Premium Plan',
    planPrice: '₹599',
    status: 'active',
    activationDate: '16/01/2026',
    expiryDate: '16/01/2027',
    lastActivity: '30 minutes ago'
  }];


  useState(() => {
    setFilteredCards(mockCards);
  }, []);

  const handleFilterChange = (filters) => {
    let filtered = [...mockCards];

    if (filters?.status) {
      filtered = filtered?.filter((card) => card?.status === filters?.status);
    }

    if (filters?.planType) {
      filtered = filtered?.filter((card) => card?.planType?.toLowerCase()?.includes(filters?.planType));
    }

    setFilteredCards(filtered);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredCards(mockCards);
      return;
    }

    let filtered = mockCards?.filter((card) =>
    card?.cardId?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
    card?.ownerPhone?.includes(searchTerm) ||
    card?.vehicleNumber?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );

    setFilteredCards(filtered);
  };

  const handleReset = () => {
    setFilteredCards(mockCards);
  };

  const handleViewDetails = (card) => {
    setSelectedCard(card);
    setShowDetailsModal(true);
  };

  const handleStatusChange = (card) => {
    setSelectedCard(card);
    setShowDetailsModal(false);
    setShowStatusModal(true);
  };

  const handleConfirmStatusChange = (data) => {
    console.log('Status change confirmed:', data);
    setShowStatusModal(false);
    setSelectedCard(null);
    alert(`Card ${data?.cardId} status changed successfully to ${data?.newStatus}`);
  };

  const handleBulkActivate = () => {
    alert(`Activating ${selectedCards?.length} cards...`);
    setSelectedCards([]);
  };

  const handleBulkDeactivate = () => {
    alert(`Deactivating ${selectedCards?.length} cards...`);
    setSelectedCards([]);
  };

  const handleBulkSuspend = () => {
    alert(`Suspending ${selectedCards?.length} cards...`);
    setSelectedCards([]);
  };

  const handleBulkExport = () => {
    alert(`Exporting ${selectedCards?.length} cards...`);
  };

  const handleNewCard = () => {
    alert('Opening new card registration form...');
  };

  const handleBulkImport = () => {
    alert('Opening bulk import interface...');
  };

  const handleExportAll = () => {
    alert('Exporting all cards data...');
  };

  const handleScanBarcode = () => {
    alert('Opening barcode scanner...');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Card Management Console
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Complete operational control center for card lifecycle management
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="sm"
              iconName="RefreshCw"
              iconPosition="left">

              Refresh
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Plus"
              iconPosition="left"
              onClick={handleNewCard}>

              New Card
            </Button>
          </div>
        </div>

        <CardStatsOverview stats={stats} />

        <QuickActions
          onNewCard={handleNewCard}
          onBulkImport={handleBulkImport}
          onExportAll={handleExportAll}
          onScanBarcode={handleScanBarcode} />


        <CardFilters
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          onReset={handleReset} />


        <CardTable
          cards={filteredCards}
          onCardSelect={setSelectedCards}
          onViewDetails={handleViewDetails}
          onStatusChange={handleStatusChange}
          selectedCards={selectedCards} />


        <BulkActionsBar
          selectedCount={selectedCards?.length}
          onActivate={handleBulkActivate}
          onDeactivate={handleBulkDeactivate}
          onSuspend={handleBulkSuspend}
          onExport={handleBulkExport}
          onClearSelection={() => setSelectedCards([])} />


        {showDetailsModal &&
        <CardDetailsModal
          card={selectedCard}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedCard(null);
          }}
          onStatusChange={handleStatusChange} />

        }

        {showStatusModal &&
        <StatusChangeModal
          card={selectedCard}
          onClose={() => {
            setShowStatusModal(false);
            setSelectedCard(null);
          }}
          onConfirm={handleConfirmStatusChange} />

        }
      </div>
    </div>);

};

export default CardManagementConsole;