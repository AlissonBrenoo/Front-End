import Title from './title';
import ModuleDetails from './moduleDetails';
import calcularIdade from './calculateBithrday';

export default function HelloWorld() {
  const nascimento = '03/03/1999';
  const idade = calcularIdade(nascimento);
  return (
    <>
      <p>{`Idade do dev: ${idade} de idade`}</p>
      <Title />
      <ModuleDetails />
    </>
  );
}
