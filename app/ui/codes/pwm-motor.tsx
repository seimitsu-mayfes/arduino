import CodeBlock from '@/app/ui/CodeBlock';

const arduinoCode = `
int Motor01_in1 = 0;
 int Motor01_in2 = 1;
 int PWM =3;

void setup() {
  pinMode(Motor01_in1,OUTPUT);
  pinMode(Motor01_in2,OUTPUT);
}

void loop() {
 digitalWrite(Motor01_in1,HIGH);
 analogWrite(PWM,255); //PWM設定値:0～255 255=5V
 delay(3000);
 digitalWrite(Motor01_in1,LOW);
 analogWrite(PWM,0); 
 delay(100); //入力切り替え時 (正転⇔逆転、正転/逆転⇔ブレーキ) に 
             //STOP モード(約 100 μs) を入れてください。
             //入力を切り替えたときに貫通電流が流れるのを防ぎます。



 digitalWrite(Motor01_in2,HIGH);
 analogWrite(PWM,128);//128=2.5V
 delay(3000);
 digitalWrite(Motor01_in2,LOW);
 analogWrite(PWM,0);
 delay(100);//同様に STOP モードを入れてください。
}

`;

export default function Home() {
  return (
    <main>
      <CodeBlock code={arduinoCode} language="cpp" />
    </main>
  );
}