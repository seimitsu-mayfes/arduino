import CodeBlock from '@/app/ui/CodeBlock';

const arduinoCode = `
void setup()
{
    pinMode(2, OUTPUT);
}

void loop()
{
   digitalWrite(2, HIGH);
   delay(1000);
   digitalWrite(2, LOW);
   delay(1000);
}
`;

export default function Home() {
  return (
    <main>
      {/* <h1>Code Sharing Site</h1> */}
      <CodeBlock code={arduinoCode} language="cpp" />
    </main>
  );
}