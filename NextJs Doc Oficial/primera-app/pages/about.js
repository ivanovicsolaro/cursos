import React from 'react';
import Link from 'next/link';

export default function About() {
    return (
        <div>
            <p>Esta es la página de about</p>
            <Link href="/">
                <a>Ir al Inicio</a>
            </Link>
        </div>
       
    )
}