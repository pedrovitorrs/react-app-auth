import { useState } from 'react';

export default function useProject() {
    const [valueButton, setValueButton] = useState(0);
  
    return { valueButton, setValueButton };
}