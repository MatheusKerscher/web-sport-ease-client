import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CadastroComponent } from "./cadastro.component";
import { IntrucoesAtivacaoContaComponent } from "./intrucoes-ativacao-conta/intrucoes-ativacao-conta.component";
import { AtivacaoContaComponent } from "./ativacao-conta/ativacao-conta.component";

const routes: Routes = [
  {
    path: 'autocadastro',
    component: CadastroComponent,
  },

  {
    path: 'confirmacao-cadastro',
    component: IntrucoesAtivacaoContaComponent,
  },

  {
    path: 'ativar-conta',
    component: AtivacaoContaComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule {}
