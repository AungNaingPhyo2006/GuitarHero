import 
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

type TabBarIconProps = {
    name: string;
    color: string;
    size: number;
  };

const Icon = ({ name, color, size } :  TabBarIconProps) => {
  const LucidIcon : any =  MaterialCommunityIcons[name];

  return <LucidIcon color={color} size={size} />;
};

export default Icon;