import { CreateClasseSchema, Classe } from "./classe.model";
import { createClasseInRepository } from "./classe.repository";

export async function createClasse(data: unknown): Promise<Classe> {
  const ClasseData = CreateClasseSchema.parse(data);
  const result = await createClasseInRepository(ClasseData);

  return result[0];
}