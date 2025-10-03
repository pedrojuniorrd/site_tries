// src/app/api/upload/route.ts
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, message: 'Nenhum arquivo enviado.' });
    }

    // Lê o arquivo como um buffer de bytes
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Gera um nome de arquivo único para evitar conflitos
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = `${uniqueSuffix}-${file.name.replace(/\s/g, '_')}`;

    // Define o caminho completo onde a imagem será salva
    const uploadPath = path.join(process.cwd(), 'public/arquitetas', filename);

    // Escreve o arquivo no sistema de arquivos
    await writeFile(uploadPath, buffer);

    // Retorna o caminho público para a imagem
    const publicPath = `/arquitetas/${filename}`;
    return NextResponse.json({ success: true, filePath: publicPath });

  } catch (error) {
    console.error('Erro no upload:', error);
    return NextResponse.json({ success: false, message: 'Erro interno do servidor.' }, { status: 500 });
  }
}