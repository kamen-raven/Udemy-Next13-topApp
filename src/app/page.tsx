'use client';
import { useState } from 'react';
import styles from "./layout.module.scss";
import { Button, HTag, InfoTag, LinkTag, PTag  } from '~shared/index';
import { Rating } from "~entities/index";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);

  const [rating, setRating] = useState<number>(4);


  return (
    <main className = {styles.main}>
      <HTag tag='h1'>
        {counter}
      </HTag>
      <Button appearance='primary'
              onClick={() => setCounter(counter + 1)}>
        button ON
      </Button>
      <Button appearance='ghost'>
        button ON
      </Button>
      <PTag size='xl'>
        paragraph
      </PTag>
      <PTag size='lg'>
        paragraph
      </PTag>
      <PTag>
        paragraph
      </PTag>
      <PTag size='sm'>
        paragraph
      </PTag>
      <InfoTag color='red' type='md'>
        red
      </InfoTag>
      <InfoTag href='https//' color='green' type='md' classNameLink=''>
        green
      </InfoTag>
      <InfoTag color='primary'>
        primary
      </InfoTag>
      <InfoTag color='gray'>
        gra
      </InfoTag>
      <InfoTag >
        transparent
      </InfoTag>
      <LinkTag href='hhtasds' >ffdds</LinkTag>

      <Rating rating={rating} setRating={setRating} isEditable></Rating>
    </main>
  );
}
