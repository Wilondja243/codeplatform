// hooks/use-image-upload.ts
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export const useUpload = () => {
    const [isUploading, setIsUploading] = useState(false);

    const uploadFile = async (file: File) => {
        setIsUploading(true);
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}-${Date.now()}.${fileExt}`;
            const filePath = `lessons/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('lesson-images')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const {
                data: { publicUrl },
            } = supabase.storage.from('lesson-images').getPublicUrl(filePath);

            return publicUrl;
        } catch (error) {
            console.error('Upload error:', error);
            return null;
        } finally {
            setIsUploading(false);
        }
    };

    return { uploadFile, isUploading };
};
