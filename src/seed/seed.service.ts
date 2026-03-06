import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhraseCategory } from '../phrase-categories/entities/phrase-category.entity';
import { Phrase } from '../phrases/entities/phrase.entity';
import { PhraseDifficulty } from '../common/enums/phrase-difficulty.enum';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectRepository(PhraseCategory)
    private categoryRepo: Repository<PhraseCategory>,
    @InjectRepository(Phrase)
    private phraseRepo: Repository<Phrase>,
  ) {}

  async onModuleInit() {
    const count = await this.categoryRepo.count();
    if (count === 0) {
      await this.seed();
    }
  }

  async seed() {
    const categories = await this.categoryRepo.save([
      { name: 'daily', description: 'Daily conversations at home', icon: 'home' },
      { name: 'outdoor', description: 'Outdoor situations and social', icon: 'tree' },
      { name: 'work', description: 'Work and IT related phrases', icon: 'briefcase' },
    ]);

    const phrases = [
      // Daily/Home - 10 phrases (5 Q&A pairs)
      {
        english: "Good morning! Did you sleep well?",
        spanish: "¡Buenos días! ¿Dormiste bien?",
        categoryId: categories[0].id,
        subcategory: 'morning',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: true,
      },
      {
        english: "Yes, I slept great! Thanks for asking.",
        spanish: "Sí, dormí muy bien! Gracias por preguntar.",
        categoryId: categories[0].id,
        subcategory: 'morning',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: false,
        relatedPhraseId: 1,
      },
      {
        english: "What's for breakfast today?",
        spanish: "¿Qué hay para desayunar hoy?",
        categoryId: categories[0].id,
        subcategory: 'meals',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: true,
      },
      {
        english: "I'm making pancakes. Would you like some?",
        spanish: "Estoy haciendo panqueques. ¿Quieres algunos?",
        categoryId: categories[0].id,
        subcategory: 'meals',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: false,
        relatedPhraseId: 3,
      },
      {
        english: "Could you pass me the salt, please?",
        spanish: "¿Podrías pasarme la sal, por favor?",
        categoryId: categories[0].id,
        subcategory: 'dinner',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: true,
      },
      {
        english: "Sure, here you go!",
        spanish: "¡Claro, aquí tienes!",
        categoryId: categories[0].id,
        subcategory: 'dinner',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: false,
        relatedPhraseId: 5,
      },
      {
        english: "I'm going to take a shower.",
        spanish: "Voy a ducharme.",
        categoryId: categories[0].id,
        subcategory: 'bathroom',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: false,
      },
      {
        english: "Don't forget to lock the door!",
        spanish: "¡No olvides cerrar la puerta con llave!",
        categoryId: categories[0].id,
        subcategory: 'bathroom',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: false,
        relatedPhraseId: 7,
      },
      {
        english: "I'm leaving for work now. See you later!",
        spanish: "Me voy al trabajo ahora. ¡Hasta luego!",
        categoryId: categories[0].id,
        subcategory: 'leaving',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: false,
      },
      {
        english: "Have a great day! Drive safe!",
        spanish: "¡Que tengas un día genial! ¡Maneja con cuidado!",
        categoryId: categories[0].id,
        subcategory: 'leaving',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: false,
        relatedPhraseId: 9,
      },

      // Outdoor - 10 phrases (gym, supermarket, social)
      // Gym (3)
      {
        english: "How many sets do you have left?",
        spanish: "¿Cuántas series te faltan?",
        categoryId: categories[1].id,
        subcategory: 'gym',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: true,
      },
      {
        english: "Just two more. I'm almost done.",
        spanish: "Solo dos más. Ya casi termino.",
        categoryId: categories[1].id,
        subcategory: 'gym',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: false,
        relatedPhraseId: 11,
      },
      {
        english: "Can you spot me on this bench press?",
        spanish: "¿Puedes ayudarme en este press de banca?",
        categoryId: categories[1].id,
        subcategory: 'gym',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: true,
      },
      {
        english: "Of course! Go ahead and lift.",
        spanish: "¡Claro! Adelante y levanta.",
        categoryId: categories[1].id,
        subcategory: 'gym',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: false,
        relatedPhraseId: 13,
      },
      {
        english: "What's your routine usually like?",
        spanish: "¿Cuál es tu rutina usualmente?",
        categoryId: categories[1].id,
        subcategory: 'gym',
        difficulty: PhraseDifficulty.ADVANCED,
        isQuestion: true,
      },
      {
        english: "I do cardio on Mondays and weights the rest of the days.",
        spanish: "Hago cardio los lunes y pesas el resto de los días.",
        categoryId: categories[1].id,
        subcategory: 'gym',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: false,
        relatedPhraseId: 15,
      },

      // Supermarket (3)
      {
        english: "Excuse me, where can I find the olive oil?",
        spanish: "Disculpa, ¿dónde puedo encontrar el aceite de oliva?",
        categoryId: categories[1].id,
        subcategory: 'supermarket',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: true,
      },
      {
        english: "It's in aisle 5, on the left side.",
        spanish: "Está en el pasillo 5, al lado izquierdo.",
        categoryId: categories[1].id,
        subcategory: 'supermarket',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: false,
        relatedPhraseId: 17,
      },
      {
        english: "Do you have this in a smaller size?",
        spanish: "¿Tienes esto en una talla más pequeña?",
        categoryId: categories[1].id,
        subcategory: 'supermarket',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: true,
      },
      {
        english: "Let me check in the back for you.",
        spanish: "Déjame verificar en la parte de atrás.",
        categoryId: categories[1].id,
        subcategory: 'supermarket',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: false,
        relatedPhraseId: 19,
      },

      // Social (4)
      {
        english: "Nice to meet you! I'm John.",
        spanish: "¡Mucho gusto! Soy John.",
        categoryId: categories[1].id,
        subcategory: 'social',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: false,
      },
      {
        english: "Nice to meet you too! I'm Sarah.",
        spanish: "Mucho gusto también! Soy Sarah.",
        categoryId: categories[1].id,
        subcategory: 'social',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: false,
        relatedPhraseId: 21,
      },
      {
        english: "Would you like to grab a coffee sometime?",
        spanish: "¿Te gustaría tomar un café alguna vez?",
        categoryId: categories[1].id,
        subcategory: 'social',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: true,
      },
      {
        english: "That sounds great! Here's my number.",
        spanish: "¡Eso suena genial! Aquí está mi número.",
        categoryId: categories[1].id,
        subcategory: 'social',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: false,
        relatedPhraseId: 23,
      },

      // Work/IT - 10 phrases
      {
        english: "Could you send me the updated document?",
        spanish: "¿Podrías enviarme el documento actualizado?",
        categoryId: categories[2].id,
        subcategory: 'email',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: true,
      },
      {
        english: "Sure, I'll send it right away.",
        spanish: "Claro, te lo envío ahora mismo.",
        categoryId: categories[2].id,
        subcategory: 'email',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: false,
        relatedPhraseId: 25,
      },
      {
        english: "The server is down again.",
        spanish: "El servidor está caído de nuevo.",
        categoryId: categories[2].id,
        subcategory: 'it',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: false,
      },
      {
        english: "I'll check the logs right now.",
        spanish: "Voy a revisar los registros ahora mismo.",
        categoryId: categories[2].id,
        subcategory: 'it',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: false,
        relatedPhraseId: 27,
      },
      {
        english: "Have you tried turning it off and on again?",
        spanish: "¿Has intentado apagarlo y volverlo a encender?",
        categoryId: categories[2].id,
        subcategory: 'it',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: true,
      },
      {
        english: "Yes, but it still doesn't work.",
        spanish: "Sí, pero aún no funciona.",
        categoryId: categories[2].id,
        subcategory: 'it',
        difficulty: PhraseDifficulty.BEGINNER,
        isQuestion: false,
        relatedPhraseId: 29,
      },
      {
        english: "We need to schedule a meeting to discuss this project.",
        spanish: "Necesitamos programar una reunión para discutir este proyecto.",
        categoryId: categories[2].id,
        subcategory: 'meeting',
        difficulty: PhraseDifficulty.ADVANCED,
        isQuestion: false,
      },
      {
        english: "How about next Tuesday at 2 PM?",
        spanish: "¿Qué tal el próximo martes a las 2 PM?",
        categoryId: categories[2].id,
        subcategory: 'meeting',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: true,
        relatedPhraseId: 31,
      },
      {
        english: "I'll have the report ready by Friday.",
        spanish: "Tendré el informe listo para el viernes.",
        categoryId: categories[2].id,
        subcategory: 'deadline',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: false,
      },
      {
        english: "Perfect, that gives us enough time to review it.",
        spanish: "Perfecto, eso nos da suficiente tiempo para revisarlo.",
        categoryId: categories[2].id,
        subcategory: 'deadline',
        difficulty: PhraseDifficulty.INTERMEDIATE,
        isQuestion: false,
        relatedPhraseId: 33,
      },
    ];

    await this.phraseRepo.save(phrases);
    console.log('Seed data inserted successfully!');
  }
}
