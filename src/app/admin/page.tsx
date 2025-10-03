// src/app/admin/page.tsx
'use client';

import React, { useState } from 'react';
import { config, SiteConfig, TeamMember } from '../../data/config';
import { projects, Project } from '../../data/projects';
import Swal from 'sweetalert2';
import AddProjectModal from '../../components/admin/AddProjectModal';
import EditProjectModal from '../../components/admin/EditProjectModal';

interface FileToUpload {
  index: number;
  file: File;
}

const AdminPage: React.FC = () => {
  // Estados
  const [siteName, setSiteName] = useState(config.siteName);
  const [email, setEmail] = useState(config.contact.email);
  const [phone, setPhone] = useState(config.contact.phone);
  const [aboutDescription, setAboutDescription] = useState(config.about.description);
  const [team, setTeam] = useState<TeamMember[]>(config.about.team);
  const [isLoading, setIsLoading] = useState(false);
  const [filesToUpload, setFilesToUpload] = useState<FileToUpload[]>([]);
  const [projectList, setProjectList] = useState<Project[]>(projects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState<Project | null>(null);

  const handleTeamChange = (index: number, field: keyof TeamMember, value: string) => {
    const updatedTeam = [...team];
    updatedTeam[index] = { ...updatedTeam[index], [field]: value };
    setTeam(updatedTeam);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleTeamChange(index, 'image', reader.result as string);
      };
      reader.readAsDataURL(file);
      setFilesToUpload(prev => [...prev.filter(f => f.index !== index), { index, file }]);
    }
  };

  const handleDeleteProject = async (projectId: string) => {
    const result = await Swal.fire({
      title: 'Você tem certeza?',
      text: "Você não poderá reverter esta ação!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch('/api/projects', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: projectId }),
        });

        if (!response.ok) {
          throw new Error('Falha ao excluir o projeto.');
        }
        setProjectList(prev => prev.filter(p => p.id !== projectId));
        Swal.fire('Excluído!', 'O projeto foi excluído com sucesso.', 'success');
      } catch (error) {
        console.error(error);
        Swal.fire('Erro!', 'Não foi possível excluir o projeto.', 'error');
      }
    }
  };

  const handleOpenEditModal = (project: Project) => {
    setProjectToEdit(project);
    setIsEditModalOpen(true);
  };

  const handleSave = async () => {
    setIsLoading(true);

    try {
      const updatedTeam = [...team];
      for (const fileToUpload of filesToUpload) {
        const formData = new FormData();
        formData.append('file', fileToUpload.file);

        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const uploadResult = await uploadResponse.json();
        if (!uploadResult.success) {
          throw new Error(`Falha no upload da imagem para ${team[fileToUpload.index].name}`);
        }
        updatedTeam[fileToUpload.index].image = uploadResult.filePath;
      }
      
      setFilesToUpload([]);
      setTeam(updatedTeam);

      const updatedConfig: SiteConfig = {
        ...config,
        siteName,
        contact: { email, phone },
        about: {
          ...config.about,
          description: aboutDescription,
          team: updatedTeam,
        },
      };

      const saveResponse = await fetch('/api/save-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedConfig),
      });

      if (!saveResponse.ok) {
        throw new Error('Falha ao salvar as configurações.');
      }

      Swal.fire({
        title: 'Sucesso!',
        text: 'As configurações foram salvas.',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      });

    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : 'Não foi possível salvar as configurações.';
      Swal.fire({
        title: 'Erro!',
        text: errorMessage,
        icon: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8 font-montserrat">
      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProjectAdded={(newProject) => {
          setProjectList(prev => [...prev, newProject]);
        }}
      />
      
      <EditProjectModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        project={projectToEdit}
        onProjectUpdated={(updatedProject) => {
          setProjectList(prev => prev.map(p => p.id === updatedProject.id ? updatedProject : p));
        }}
      />

      <h1 className="text-4xl font-bold mb-8 text-zinc-800">Painel de Controle</h1>

      {/* Seção de Configurações Gerais */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-700">Configurações Gerais</h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-1">
              Nome do Site
            </label>
            <input type="text" id="siteName" value={siteName} onChange={(e) => setSiteName(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-800 focus:border-gray-800" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email de Contato
            </label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-800 focus:border-gray-800" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-800 focus:border-gray-800" />
          </div>
        </div>
      </div>

      {/* Seção "Sobre a Empresa" */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-700">Sobre a Empresa</h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="aboutDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Descrição
            </label>
            <textarea id="aboutDescription" value={aboutDescription} onChange={(e) => setAboutDescription(e.target.value)} rows={5} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-800 focus:border-gray-800 resize-none" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-zinc-600">Equipe</h3>
            <div className="space-y-6">
              {team.map((member, index) => (
                <div key={index} className="p-4 border rounded-md grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor={`memberName-${index}`} className="block text-sm font-medium text-gray-700">Nome</label>
                      <input type="text" id={`memberName-${index}`} value={member.name} onChange={(e) => handleTeamChange(index, 'name', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                    <div>
                      <label htmlFor={`memberRole-${index}`} className="block text-sm font-medium text-gray-700">Cargo</label>
                      <input type="text" id={`memberRole-${index}`} value={member.role} onChange={(e) => handleTeamChange(index, 'role', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Foto</label>
                    <div className="mt-1 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                        <img src={member.image} alt={`Preview de ${member.name}`} className="w-full h-full object-cover" />
                      </div>
                      <div className="w-full">
                        <input type="file" id={`memberImage-${index}`} accept="image/png, image/jpeg, image/webp" onChange={(e) => handleFileChange(e, index)} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-800 hover:file:bg-gray-200" />
                        <p className="text-xs text-gray-500 mt-1">Observação: Use imagens quadradas (ex: 500x500 pixels).</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Gerenciamento de Projetos */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-zinc-700">Gerenciamento de Projetos</h2>
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors">
            Adicionar Novo Projeto
          </button>
        </div>
        <div className="space-y-4">
          {projectList.map((project) => (
            <div key={project.id} className="flex items-center justify-between p-4 border rounded-md">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                  <img src={project.thumbnail} alt={project.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-zinc-800">{project.name}</h4>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleOpenEditModal(project)} className="bg-gray-200 text-gray-800 font-semibold py-1 px-3 rounded-md hover:bg-gray-300 transition-colors">
                  Editar
                </button>
                <button onClick={() => handleDeleteProject(project.id)} className="bg-red-500 text-white font-semibold py-1 px-3 rounded-md hover:bg-red-400 transition-colors">
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={isLoading}
          className="bg-gray-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors disabled:bg-gray-400"
        >
          {isLoading ? 'Salvando...' : 'Salvar Alterações Gerais'}
        </button>
      </div>
    </div>
  );
};

export default AdminPage;