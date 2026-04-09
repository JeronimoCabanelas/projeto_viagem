import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  tituloPrincipal = 'why choose yourz';

  diferenciais = [
    {
      icone: '/card/tickets.svg fill.png',
      titulo: 'ultimate flexibility',
      descricao: "You're in control, with  free cancellation..."
    },
    {
      icone: '/card/hot-air-ballon.svg fill.png',
      titulo: 'Memorable-experiences',
      descricao: 'Browse and book yours and activities...'
    },
    {

    }
  ]
}

