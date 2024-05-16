import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Lembrete } from 'src/app/core/types/lembrete';

@Component({
  selector: 'app-lembrete',
  templateUrl: './lembrete.component.html',
  styleUrls: ['./lembrete.component.scss']
})
export class LembreteComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() lembrete: Lembrete = {
    id: '',
    titulo: '',
    descricao: '',
    prioridade: '',
    data: new Date(),
    modelo: '',
    usuario_id: ''
  };

  intervalo: Subscription | undefined;
  audioPlayer: HTMLAudioElement | undefined;
  audioLoaded: boolean = false;

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    if (this.lembrete.data) {
      this.intervalo = interval(1000).subscribe(() => {
        const dataAtual = this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm');
        if (dataAtual && dataAtual >= this.lembrete.data.toString()) {
          if (this.intervalo) {
            this.intervalo.unsubscribe();
          }
          this.playAudio();
          setTimeout(() => {
            alert(`${this.lembrete.titulo}\nprioridade: ${this.lembrete.prioridade}`);
            this.pauseAudio();
            window.focus();
          }, 1000);
        }
      });
    }
  }

  ngAfterViewInit() {
    this.audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
    this.audioPlayer.addEventListener('loadeddata', () => {
      this.audioLoaded = true;
    });
  }

  ngOnDestroy() {
    if (this.intervalo) {
      this.intervalo.unsubscribe();
    }
    this.pauseAudio();
  }

  larguraLembrete(): string {
    if (this.lembrete.descricao.length >= 256) {
      return 'lembrete-g';
    }
    return 'lembrete-p';
  }

  playAudio() {
    if (this.audioPlayer && this.audioLoaded) {
      this.audioPlayer.loop = true;
      this.audioPlayer.play();
    }
  }

  pauseAudio() {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.audioPlayer.currentTime = 0;
    }
  }
}
