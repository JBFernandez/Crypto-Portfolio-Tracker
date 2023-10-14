import { useState } from "react";

export const useForm = (initialForm = {} ) => {

    const [form, setForm] = useState(initialForm)
    
      const handleChange = (e) => {
        e.preventDefault();
    
    
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
    
    
    }

    return {
        form,
        handleChange
    }
    
}

