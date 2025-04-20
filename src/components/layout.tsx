import { ReactNode } from 'react';
import '../styles/globals.scss';

export const metadata = {
	title: 'Marios Vourgos',
	description: 'Marios Vourgos - Beyond',
};

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html lang="en">
			<body>
					<main>
						{children}
					</main>
			</body>
		</html>
	);
};