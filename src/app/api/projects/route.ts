// src/app/api/projects/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { projects, Project } from '../../../data/projects';

const projectsFilePath = path.join(process.cwd(), 'src', 'data', 'projects.ts');

// Função helper para reescrever o arquivo projects.ts
const saveProjectsToFile = (updatedProjects: Project[]) => {
  const fileContent = `
// data/projects.ts

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  description_short: string; 
  images: string[];
  thumbnail: string;
}

export const projects: Project[] = ${JSON.stringify(updatedProjects, null, 2)};
`;
  fs.writeFileSync(projectsFilePath, fileContent, 'utf-8');
};

// Função para lidar com requisições POST (Adicionar Projeto)
export async function POST(request: Request) {
  try {
    const newProjectData = await request.json();

    if (!newProjectData.name || !newProjectData.category || !newProjectData.images) {
      return NextResponse.json({ message: 'Dados incompletos para o projeto' }, { status: 400 });
    }

    const newProject: Project = {
      id: Date.now().toString(),
      description: newProjectData.description || '',
      description_short: newProjectData.description_short || '',
      thumbnail: newProjectData.thumbnail || newProjectData.images[0] || '',
      ...newProjectData,
    };

    const updatedProjects = [...projects, newProject];
    saveProjectsToFile(updatedProjects);

    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch (error) {
    console.error('Erro ao adicionar projeto:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}

// Função para lidar com requisições DELETE (Excluir Projeto)
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ message: 'ID do projeto é obrigatório' }, { status: 400 });
    }

    const updatedProjects = projects.filter((p) => p.id !== id);

    if (projects.length === updatedProjects.length) {
      return NextResponse.json({ message: 'Projeto não encontrado' }, { status: 404 });
    }

    saveProjectsToFile(updatedProjects);

    return NextResponse.json({ success: true, message: 'Projeto excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir projeto:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}

// Função para lidar com requisições PUT (Editar Projeto)
export async function PUT(request: Request) {
  try {
    const updatedProjectData: Project = await request.json();

    if (!updatedProjectData.id) {
      return NextResponse.json({ message: 'ID do projeto é obrigatório' }, { status: 400 });
    }

    const projectIndex = projects.findIndex((p) => p.id === updatedProjectData.id);

    if (projectIndex === -1) {
      return NextResponse.json({ message: 'Projeto não encontrado' }, { status: 404 });
    }

    const updatedProjects = [...projects];
    updatedProjects[projectIndex] = updatedProjectData;

    saveProjectsToFile(updatedProjects);

    return NextResponse.json({ success: true, project: updatedProjectData });
  } catch (error) {
    console.error('Erro ao atualizar projeto:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}