import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkNetworkStatus = async () => {
      const { isConnected } = await NetInfo.fetch();
      setIsOnline(isConnected);
    };

    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOnline(state.isConnected);
    });

    // Initial network check
    checkNetworkStatus();

    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
    };
  }, []);

  return isOnline;
};

export default useIsOnline;
