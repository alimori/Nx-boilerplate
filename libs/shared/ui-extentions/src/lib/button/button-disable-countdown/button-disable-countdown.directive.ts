import { Directive, ElementRef, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Directive({
  selector: 'button[sampleDisableCountdown]',
  exportAs: 'sampleButtonDisableCountdown',
})
export class ButtonDisableCountdownDirective implements OnInit, OnDestroy {

  @Input() showCountdown = true;
  @Output() finish = new EventEmitter();
  @Output() progress = new EventEmitter();
  @HostBinding('attr.disabled') _disabled?: boolean = undefined;
  private _elapsedMilliSeconds = 0;
  private _subscription?: Subscription;
  private _textElement?: any;

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  public start(timeout: number): void {
    this._disabled = true;

    this._subscription = timer(1000, 1000).subscribe(e => {
      this._elapsedMilliSeconds += 1000;
      const remainedSeconds = Math.trunc((timeout - this._elapsedMilliSeconds) / 1000);

      this.progress.emit();
      this._setTimeoutText(remainedSeconds);

      // Finished?
      if (this._elapsedMilliSeconds >= timeout) {
        this._disabled = undefined;
        this._elapsedMilliSeconds = 0;
        this.finish.emit();
        this._setTimeoutText(undefined);
        this._unsubscribe();
      }
    },
      err => { },
      () => {
      });
  }

  private _setTimeoutText(timeout?: number) {
    if (this._textElement) {
      this._renderer.removeChild(this._elementRef.nativeElement, this._textElement);
    }

    if (timeout) {
      this._textElement = this._renderer.createText(` (${timeout})`);
      this._renderer.appendChild(this._elementRef.nativeElement, this._textElement);
    }
  }

  private _unsubscribe() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe();
  }

}
