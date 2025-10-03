// src/components/admin/EditProjectModal.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Project } from '../../data/projects';
import Swal from 'sweetalert2';

interface EditProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onProjectUpdated: (updatedProject: Project) => void;
}

const EditProjectModal: React.FC<EditProjectModalProps> = ({ project, isOpen, onClose, onProjectUpdated }) => {
  // Estados para os campos do formulário
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  
  // Estados para gerenciar as imagens
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Popula o formulário quando um projeto é selecionado
  useEffect(() => {
    if (project) {
      setName(project.name);
      setCategory(project.category);
      setExistingImages(project.images);
      setNewImages([]); // Reseta os arquivos novos ao abrir o modal
    }
  }, [project]);

  if (!isOpen || !project) return null;

  const handleRemoveExistingImage = (imageToRemove: string) => {
    setExistingImages(prev => prev.filter(img => img !== imageToRemove));
  };

  const handleNewImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Faz o upload apenas das NOVAS imagens
      const uploadedImagePaths: string[] = [];
      for (const image of newImages) {
        const formData = new FormData();
        formData.append('file', image);
        const res = await fetch('/api/upload', { method: 'POST', body: formData });
        const data = await res.json();
        if (!data.success) throw new Error(`Falha no upload da imagem: ${image.name}`);
        uploadedImagePaths.push(data.filePath);
      }

      // 2. Constrói a lista final de imagens
      const finalImagePaths = [...existingImages, ...uploadedImagePaths];

      // 3. Monta o objeto final do projeto
      const updatedProjectData: Project = {
        ...project,
        name,
        category,
        images: finalImagePaths,
        thumbnail: finalImagePaths[0] || '', // Define a primeira imagem como thumbnail
      };

      // 4. Envia os dados atualizados para a API
      const response = await fetch('/api/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProjectData),
      });

      if (!response.ok) throw new Error('Falha ao atualizar o projeto.');
      
      const { project: savedProject } = await response.json();
      onProjectUpdated(savedProject);
      Swal.fire('Sucesso!', 'Projeto atualizado.', 'success');
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full max-h-full overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-zinc-800">Editar Projeto</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="editProjectName" className="block text-sm font-medium text-gray-700">Nome do Projeto</label>
            <input type="text" id="editProjectName" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
          </div>
          <div>
            <label htmlFor="editProjectCategory" className="block text-sm font-medium text-gray-700">Categoria</label>
            <input type="text" id="editProjectCategory" value={category} onChange={(e) => setCategory(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
          </div>

          {/* Gerenciamento de Imagens */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Imagens Atuais</label>
            <div className="mt-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {existingImages.map(img => (
                <div key={img} className="relative group">
                  <img src={img} alt="Imagem do projeto" className="w-full h-24 object-cover rounded-md" />
                  <button type="button" onClick={() => handleRemoveExistingImage(img)} className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 text-xs leading-none opacity-0 group-hover:opacity-100 transition-opacity">
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="newProjectImages" className="block text-sm font-medium text-gray-700">Adicionar Novas Imagens</label>
            <input type="file" id="newProjectImages" onChange={handleNewImageChange} multiple accept="image/*" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-gray-100 file:text-gray-800 hover:file:bg-gray-200"/>
            <p className="text-xs text-gray-500 mt-1">Selecione novas imagens para adicionar ao projeto.</p>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button type="button" onClick={onClose} disabled={isSubmitting} className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300">Cancelar</button>
            <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 disabled:bg-blue-300">
              {isSubmitting ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjectModal;