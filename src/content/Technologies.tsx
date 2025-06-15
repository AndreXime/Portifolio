import ReactIcon from 'devicon/icons/react/react-original.svg';
import NextjsIcon from 'devicon/icons/nextjs/nextjs-original.svg';
import TypescriptIcon from 'devicon/icons/typescript/typescript-original.svg';
import TailwindIcon from 'devicon/icons/tailwindcss/tailwindcss-original.svg';

import NodejsIcon from 'devicon/icons/nodejs/nodejs-original.svg';
import { SiExpress as ExpressIcon } from 'react-icons/si';
import PostgresqlIcon from 'devicon/icons/postgresql/postgresql-original.svg';

import DockerIcon from 'devicon/icons/docker/docker-original.svg';
import CICDIcon from 'devicon/icons/githubactions/githubactions-original.svg';
import GitIcon from 'devicon/icons/git/git-original.svg';
import LinuxIcon from 'devicon/icons/linux/linux-original.svg';
import NginxIcon from 'devicon/icons/nginx/nginx-original.svg';

import VscodeIcon from 'devicon/icons/vscode/vscode-original.svg';
import { SiJest as JestIcon } from 'react-icons/si';
import { FaGithub as GithubIcon } from 'react-icons/fa';
import { SiVercel as VercelIcon } from 'react-icons/si';

import { IconType } from 'react-icons';

const wrapDevicon = (src: string) => {
	return function WrappedDevicon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
		return (
			<img
				src={src}
				loading="lazy"
				{...props}
			/>
		);
	};
};

interface Skill {
	name: string;
	Svg: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> | IconType;
}

interface Category {
	category: string;
	skills: Skill[];
}
const Tecnologies: Category[] = [
	{
		category: 'Desenvolvimento Web',
		skills: [
			{ name: 'React', Svg: wrapDevicon(ReactIcon) },
			{ name: 'Next.js', Svg: wrapDevicon(NextjsIcon) },
			{ name: 'TypeScript', Svg: wrapDevicon(TypescriptIcon) },
			{ name: 'Tailwind CSS', Svg: wrapDevicon(TailwindIcon) },
			{ name: 'Node.js', Svg: wrapDevicon(NodejsIcon) },
			{ name: 'Express', Svg: ExpressIcon },
			{ name: 'PostgreSQL', Svg: wrapDevicon(PostgresqlIcon) },
		],
	},
	{
		category: 'DevOps',
		skills: [
			{ name: 'Docker', Svg: wrapDevicon(DockerIcon) },
			{ name: 'CI/CD', Svg: wrapDevicon(CICDIcon) },
			{ name: 'Git', Svg: wrapDevicon(GitIcon) },
			{ name: 'Linux', Svg: wrapDevicon(LinuxIcon) },
			{ name: 'Nginx', Svg: wrapDevicon(NginxIcon) },
		],
	},
	{
		category: 'Ferramentas',
		skills: [
			{ name: 'VS Code', Svg: wrapDevicon(VscodeIcon) },
			{ name: 'Jest', Svg: JestIcon },
			{ name: 'GitHub', Svg: GithubIcon },
			{ name: 'Vercel', Svg: VercelIcon },
		],
	},
];

export default Tecnologies;
