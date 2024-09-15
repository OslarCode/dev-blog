import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí iría la lógica para manejar el envío del formulario
    console.log("Formulario enviado");
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <Card>
        <CardHeader>
          <CardTitle>Envíanos un mensaje</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <Input id="name" name="name" type="text" required />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <Button type="submit">Enviar mensaje</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
