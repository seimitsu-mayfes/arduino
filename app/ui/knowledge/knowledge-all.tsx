import Image from 'next/image';
import Link from 'next/link';
import {ResistorColorCode,HeatShrinkTube,ArduinoPin,BreadBoard,WireStripper,ArduinoSoftwareBasics,Multimeter,Soldering,GlueGun} from '@/app/ui/knowledge/know';

export default function AllKnowledgeContent() {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
        <ResistorColorCode />
        <HeatShrinkTube />
        <ArduinoPin />
        <BreadBoard />
        <WireStripper />
        <ArduinoSoftwareBasics />
        <Multimeter />
        <Soldering />
        <GlueGun />
    </div>
  );
}

