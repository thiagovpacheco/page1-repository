import os
import subprocess
import sys

def run_command(command, cwd=None):
    print(f"Executando: {command}")
    process = subprocess.Popen(
        command, shell=True, cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True
    )
    for line in iter(process.stdout.readline, ''):
        print(line, end='')
    
    process.stdout.close()
    return_code = process.wait()
    if return_code != 0:
        print(f"Erro ao executar: {command}", file=sys.stderr)
        for line in process.stderr:
            print(line, end='', file=sys.stderr)
        sys.exit(return_code)

def main():
    # Garantir que o Node.js está no PATH (útil após instalações recentes)
    os.environ["PATH"] += os.pathsep + r"C:\Program Files\nodejs"

    project_name = "nura-health-web"
    current_dir = os.getcwd()
    project_path = os.path.join(current_dir, project_name)

    if os.path.exists(project_path):
        print(f"Diretório {project_name} já existe. Pulando a criação do projeto Vite.")
    else:
        print("Criando o projeto React com Vite...")
        run_command(f"npm.cmd create vite@latest {project_name} -- --template react")

    npm_path = r"C:\Program Files\nodejs\npm.cmd"
    npx_path = r"C:\Program Files\nodejs\npx.cmd"

    print("Instalando dependências (Tailwind, GSAP, Lucide React)...")
    
    # Instalando tailwind e outras dependências
    run_command(f'"{npm_path}" install', cwd=project_path)
    run_command(f'"{npm_path}" install -D tailwindcss postcss autoprefixer', cwd=project_path)
    run_command(f'"{npx_path}" tailwindcss init -p', cwd=project_path)
    
    # Instalando bibliotecas adicionais
    run_command(f'"{npm_path}" install gsap lucide-react', cwd=project_path)

    print("Setup concluído com sucesso!")

if __name__ == "__main__":
    main()
