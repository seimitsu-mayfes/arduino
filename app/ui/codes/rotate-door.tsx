import CodeBlock from '@/app/ui/CodeBlock';

const arduinoCode = `
#define echoPin1 3  //エコーピン1
#define trigPin1 4
#define ledPin1 5
#define echoPin2 8  //エコーピン2
#define trigPin2 7
#define ledPin2 6
#define moterPWM 11
#define moter1 10
#define moter2 9

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  pinMode(echoPin1, INPUT);  //エコー
  pinMode(trigPin1, OUTPUT);
  pinMode(ledPin1, OUTPUT);
  pinMode(echoPin2, INPUT);
  pinMode(trigPin2, OUTPUT);
  pinMode(ledPin1, OUTPUT);
  pinMode(moter1, OUTPUT);
  pinMode(moter2, OUTPUT);
 analogWrite(moterPWM, 25);
}

void loop() {
  // put your main code here, to run repeatedly:
  
  //Pulse波を書く
  digitalWrite(trigPin1, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin1, HIGH); //超音波を出力
  delayMicroseconds(10);
  digitalWrite(trigPin1, LOW);

  double duration1 = pulseIn(echoPin1, HIGH); //センサからの入力 : 到達までの時間

  digitalWrite(trigPin2, LOW);
  delayMicroseconds(2);
 digitalWrite(trigPin2, HIGH); //超音波を出力
  delayMicroseconds(10);
  digitalWrite(trigPin2, LOW);

  double duration2 = pulseIn(echoPin2, HIGH); //センサからの入力 : 到達までの時間

  if(duration1 > 0) {
    Serial.print("duration1 : ");
    Serial.println(duration1);
  }
  if(duration2 > 0) {
    Serial.print("duration2 : ");
    Serial.println(duration2);
  }

  int th = 270;
  if(duration1 > th || duration2 > th){
    //超音波を受け取れない=廻る
    Serial.println("ON");
    digitalWrite(moter1, HIGH);
    digitalWrite(moter2, LOW);
  }
  else {
    Serial.println("OFF");
    digitalWrite(moter1, LOW);
    digitalWrite(moter2, LOW);
  }

  //LED
  if(duration1 > 380) digitalWrite( ledPin1, HIGH );
  else digitalWrite( ledPin1, LOW );
  if(duration2 > 380) digitalWrite( ledPin2, HIGH );
  else digitalWrite( ledPin2, LOW );

  delay(50);
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