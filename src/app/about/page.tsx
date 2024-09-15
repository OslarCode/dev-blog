import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Acerca de Dev Blog</h1>
      <Card>
        <CardHeader>
          <CardTitle>Nuestra Misión</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Dev Blog nació con la misión de informar y educar a desarrolladores
            web sobre las últimas tendencias y tecnologías. Nuestro objetivo es
            proporcionar contenido de alta calidad que ayude a los
            desarrolladores de todos los niveles a mantenerse actualizados y
            mejorar sus habilidades.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Nuestro Equipo</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Somos un equipo diverso de desarrolladores apasionados por la web y
            sus tecnologías. Cada miembro de nuestro equipo aporta una
            perspectiva única y años de experiencia en el campo.
          </p>
          {/* Aquí podrías agregar más detalles sobre los miembros del equipo */}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Contacto</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            ¿Tienes alguna pregunta o sugerencia? No dudes en ponerte en
            contacto con nosotros en
            <a
              href="mailto:info@devblog.com"
              className="text-blue-600 hover:underline"
            >
              {" "}
              info@devblog.com
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
