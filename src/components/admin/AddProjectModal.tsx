// src/components/admin/AddProjectModal.tsx
'use client';

import React, { useState } from 'react';
import { Project } from '../../data/projects';
import Swal from 'sweetalert2';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectAdded: (newProject: Project) => void;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose, onProjectAdded }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !category || images.length === 0) {
      Swal.fire('Campos incompletos', 'Por favor, preencha todos os campos e selecione pelo menos uma imagem.', 'warning');
      return;
    }
    setIsSubmitting(true);

    try {
      const uploadedImagePaths: string[] = [];
      for (const image of images) {
        const formData = new FormData();
        formData.append('file', image);
        const res = await fetch('/api/upload', { method: 'POST', body: formData });
        const data = await res.json();
        if (!data.success) throw new Error('Falha no upload da imagem: ' + image.name);
        uploadedImagePaths.push(data.filePath);
      }

      const projectResponse = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, category, images: uploadedImagePaths }),
      });

      if (!projectResponse.ok) {
        throw new Error('Falha ao salvar o projeto.');
      }

      const { project: newProject } = await projectResponse.json();
      onProjectAdded(newProject);
      Swal.fire('Sucesso!', 'Novo projeto adicionado.', 'success');
      onClose();
      
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro.';
      Swal.fire('Erro!', errorMessage, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-zinc-800">Adicionar Novo Projeto</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Nome do Projeto</label>
            <input type="text" id="projectName" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
          </div>
          <div>
            <label htmlFor="projectCategory" className="block text-sm font-medium text-gray-700">Categoria</label>
            <input type="text" id="projectCategory" value={category} onChange={(e) => setCategory(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
          </div>
          <div>
            <label htmlFor="projectImages" className="block text-sm font-medium text-gray-700">Imagens do Projeto</label>
            <input type="file" id="projectImages" onChange={handleImageChange} multiple accept="image/*" required className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-gray-100 file:text-gray-800 hover:file:bg-gray-200"/>
            <p className="text-xs text-gray-500 mt-1">Você pode selecionar várias imagens.</p>
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <button type="button" onClick={onClose} disabled={isSubmitting} className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300">Cancelar</button>
            <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 disabled:bg-blue-300">
              {isSubmitting ? 'Salvando...' : 'Salvar Projeto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;