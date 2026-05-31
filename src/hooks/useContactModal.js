import { useContext } from 'react';
import { ContactModalContext } from '../components/contactModalContext';

export function useContactModal() {
  const context = useContext(ContactModalContext);

  if (!context) {
    throw new Error('useContactModal must be used inside ContactModalProvider');
  }

  return context;
}
