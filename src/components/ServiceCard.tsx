
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  iconColor: string;
}

const ServiceCard = ({ title, description, iconColor }: ServiceCardProps) => {
  return (
    <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-pink-400 bg-white">
      <div className={`text-2xl font-bold mb-3 ${iconColor}`}>{title}</div>
      <p className="text-gray-700">{description}</p>
    </Card>
  );
};

export default ServiceCard;
