import { Module } from '../types';
import { COLORS } from '../theme';

export const MODULES: Module[] = [
  {
    id: 'modulo1',
    number: 1,
    title: 'Fundamentos da Política Social',
    subtitle: 'Seguridade Social, SUAS, Família e Políticas Públicas',
    color: COLORS.module1,
    icon: '🏛️',
    lessons: [
      {
        id: 'm1l1',
        title: 'A Seguridade Social no Brasil',
        content:
          'A Seguridade Social foi instituída pela Constituição Federal de 1988 (art. 194) como um conjunto integrado de ações dos poderes públicos e da sociedade, destinadas a assegurar os direitos relativos à Saúde, à Previdência Social e à Assistência Social.\n\n' +
          'Antes de 1988, a proteção social brasileira era fragmentada e restrita aos trabalhadores formais contribuintes. A CF/88 rompeu essa lógica ao reconhecer a assistência social como direito do cidadão e dever do Estado, independentemente de contribuição prévia.\n\n' +
          'Os princípios organizativos da Seguridade Social são: universalidade da cobertura e do atendimento; uniformidade e equivalência dos benefícios e serviços; seletividade e distributividade na prestação dos benefícios; irredutibilidade do valor dos benefícios; equidade na forma de participação no custeio; diversidade da base de financiamento; e caráter democrático e descentralizado da administração.\n\n' +
          'O financiamento é feito por toda a sociedade, mediante recursos do orçamento da União, dos Estados, do Distrito Federal, dos Municípios e das contribuições sociais — COFINS, CSLL, PIS/PASEP, contribuições previdenciárias de empregados e empregadores.\n\n' +
          'A Saúde é universal e gratuita (SUS); a Previdência exige contribuição prévia; a Assistência Social é prestada a quem dela necessitar, sem exigência de contribuição.',
        keyPoints: [
          'CF/88 art. 194: Saúde + Previdência + Assistência Social = Seguridade Social',
          'Assistência Social: direito do cidadão, dever do Estado, sem exigência de contribuição',
          'Financiamento diversificado: COFINS, CSLL, PIS/PASEP e contribuições previdenciárias',
          'Princípio da universalidade: cobertura e atendimento para todos',
          'Princípio da seletividade: prioridade para quem mais necessita',
        ],
      },
      {
        id: 'm1l2',
        title: 'Matricialidade, Territorialização e Vigilância Socioassistencial',
        content:
          'A Política Nacional de Assistência Social (PNAS/2004) e a NOB/SUAS definem as matrizes estruturantes do SUAS. A matricialidade sociofamiliar significa que a família é a unidade central de atenção dos serviços socioassistenciais — não o indivíduo isolado, mas o núcleo familiar em seu contexto.\n\n' +
          'Esse princípio reconhece a família como espaço privilegiado de proteção, socialização e afeto, mas também como lócus de conflitos e vulnerabilidades. O trabalho social parte da família para compreender as necessidades de cada membro e fortalecer os vínculos internos.\n\n' +
          'A territorialização implica organizar os serviços de acordo com a distribuição geográfica das famílias e a incidência de vulnerabilidades. O CRAS (Centro de Referência de Assistência Social) deve estar localizado nas áreas de maior concentração de pobreza, pois a proximidade facilita o acesso e permite o conhecimento do território.\n\n' +
          'A vigilância socioassistencial é uma das funções da política de assistência social — junto com proteção e defesa de direitos. Consiste na produção, sistematização e análise de informações sobre situações de vulnerabilidade e risco que afetam famílias e indivíduos. Subsidia o planejamento e a gestão dos serviços.\n\n' +
          'Instrumentos da vigilância: Cadastro Único (CadÚnico), Censo SUAS, Registro Mensal de Atendimentos (RMA) e prontuários do SUAS.',
        keyPoints: [
          'Matricialidade sociofamiliar: família como unidade central de atenção, não o indivíduo',
          'Territorialização: CRAS localizado nas áreas de maior vulnerabilidade do território',
          'Vigilância socioassistencial: produz informações para planejar e monitorar serviços',
          'Funções do SUAS: proteção social + vigilância socioassistencial + defesa de direitos',
          'CadÚnico e RMA são instrumentos centrais da vigilância socioassistencial',
        ],
      },
      {
        id: 'm1l3',
        title: 'A Família Contemporânea: Transformações e Vulnerabilidade',
        content:
          'A família passou por profundas transformações ao longo do século XX e início do XXI. A ideia de família nuclear (pai, mãe e filhos biológicos) deixou de ser o único modelo existente e passou a coexistir com múltiplas configurações.\n\n' +
          'As principais configurações familiares contemporâneas são: famílias monoparentais (chefiadas por um único responsável, majoritariamente mulheres); famílias recompostas ou reconstituídas (novos vínculos após separação); famílias homoafetivas (reconhecidas pelo STF em 2011); famílias extensas (com avós, tios, primos na mesma residência); e famílias unipessoais (pessoa vivendo sozinha).\n\n' +
          'Vulnerabilidade social é uma condição resultante da combinação de fatores: pobreza e insegurança de renda, baixa escolaridade, desemprego, violência, fragilidade nos vínculos familiares e comunitários, discriminação por gênero, raça, etnia, geração e orientação sexual.\n\n' +
          'O educador social deve ter uma visão ampliada da família, sem reproduzir julgamentos morais sobre sua configuração. A abordagem deve partir das potencialidades e da história de cada família, não apenas de suas fragilidades.\n\n' +
          'O conceito de ciclo de vida familiar também é relevante: diferentes estágios (nascimento de filhos, adolescência, velhice) trazem demandas específicas que o trabalho social precisa considerar.',
        keyPoints: [
          'Família monoparental: chefiada por um responsável, maioria mulheres — forma mais comum nas famílias atendidas pelo SUAS',
          'Vulnerabilidade social: combinação de pobreza, baixa escolaridade, violência, fragilidade de vínculos',
          'Abordagem sem julgamento moral: reconhecer a diversidade de configurações familiares',
          'Ciclo de vida familiar: cada fase traz demandas sociais específicas',
          'STF 2011: reconheceu a união homoafetiva como entidade familiar',
        ],
      },
      {
        id: 'm1l4',
        title: 'Políticas Públicas: Conceito, Formulação e Ciclo',
        content:
          'Políticas públicas são conjuntos de decisões e ações do Estado (e também da sociedade civil, em parceria) voltadas para solucionar problemas públicos e garantir direitos. Envolvem objetivos, metas, recursos e mecanismos de implementação.\n\n' +
          'O ciclo das políticas públicas é um modelo analítico que descreve as fases do processo: (1) Identificação do problema e formação da agenda — o problema é reconhecido como público e entra na pauta governamental; (2) Formulação — definição de alternativas e escolha de estratégias; (3) Tomada de decisão — escolha política sobre qual alternativa adotar; (4) Implementação — execução por órgãos e agentes; (5) Avaliação — análise dos resultados e impactos; (6) Extinção ou continuidade.\n\n' +
          'Os tipos clássicos de políticas públicas são: políticas distributivas (benefícios individuais sem conflito evidente); políticas redistributivas (transferem recursos de grupos mais ricos para mais pobres — ex.: Bolsa Família); políticas regulatórias (normas e controles); políticas constitutivas (definem regras do jogo político).\n\n' +
          'No Brasil, a assistência social passou por um processo de consolidação como política pública após a CF/88: LOAS (1993), PNAS (2004), NOB/SUAS (2005/2012) e NOB-RH/SUAS (2006) são marcos normativos fundamentais.\n\n' +
          'A descentralização e o controle social (participação da sociedade via Conselhos de Assistência Social — CNAS, CEAS, CMAS) são princípios da gestão das políticas socioassistenciais.',
        keyPoints: [
          'Ciclo: agenda → formulação → decisão → implementação → avaliação → extinção/continuidade',
          'LOAS (Lei 8.742/1993): marco legal da Assistência Social como política pública',
          'PNAS/2004 e NOB/SUAS: referenciais técnicos e normativos do SUAS',
          'Bolsa Família: exemplo de política redistributiva de transferência de renda',
          'Controle social: Conselhos (CNAS, CEAS, CMAS) garantem participação da sociedade',
        ],
      },
    ],
    exercises: [
      {
        id: 'm1e1',
        question:
          'Segundo a Constituição Federal de 1988, a Seguridade Social compreende um conjunto integrado de ações destinadas a assegurar os direitos relativos a:',
        options: [
          'Saúde, Previdência Social e Assistência Social',
          'Saúde, Educação e Assistência Social',
          'Previdência Social, Habitação e Saúde',
          'Assistência Social, Emprego e Renda',
        ],
        correctIndex: 0,
        explanation:
          'O art. 194 da CF/88 define expressamente o tripé da Seguridade Social: Saúde (acesso universal), Previdência Social (contributiva) e Assistência Social (para quem dela necessitar). Educação, habitação e emprego são direitos sociais, mas não integram o conceito de Seguridade Social.',
      },
      {
        id: 'm1e2',
        question:
          'O princípio da matricialidade sociofamiliar no SUAS significa que:',
        options: [
          'A família é a unidade central de atenção dos serviços socioassistenciais',
          'O atendimento deve ser realizado apenas por assistentes sociais',
          'Os serviços devem se concentrar nas capitais estaduais',
          'A previdência social é a principal fonte de proteção da família',
        ],
        correctIndex: 0,
        explanation:
          'Matricialidade sociofamiliar significa que a família — e não o indivíduo isolado — é a unidade de referência do trabalho social. O SUAS reconhece a família como espaço de proteção e socialização, mas também de conflitos e vulnerabilidades, por isso estrutura seus serviços tendo a família como ponto de partida.',
      },
      {
        id: 'm1e3',
        question:
          'A vigilância socioassistencial, enquanto função da Política de Assistência Social, consiste em:',
        options: [
          'Fiscalizar o comportamento das famílias atendidas pelo CRAS',
          'Produzir e analisar informações sobre vulnerabilidades para subsidiar o planejamento dos serviços',
          'Monitorar judicialmente os casos de violação de direitos',
          'Supervisionar os profissionais que atuam no SUAS',
        ],
        correctIndex: 1,
        explanation:
          'A vigilância socioassistencial é uma das três funções da Política de Assistência Social (junto com proteção e defesa de direitos). Sua função é produzir, sistematizar e analisar informações territoriais sobre situações de vulnerabilidade e risco, para subsidiar o planejamento e a gestão dos serviços — e não fiscalizar famílias ou profissionais.',
      },
      {
        id: 'm1e4',
        question:
          'No ciclo das políticas públicas, a fase de "implementação" corresponde a:',
        options: [
          'Identificação do problema e entrada na agenda governamental',
          'Definição de alternativas de ação para resolver o problema',
          'Execução das ações por órgãos e agentes responsáveis',
          'Análise dos resultados e impactos alcançados pela política',
        ],
        correctIndex: 2,
        explanation:
          'A implementação é a fase em que as decisões tomadas são colocadas em prática pelos órgãos executores e agentes responsáveis. Antes dela vêm a formação da agenda (identificação do problema), a formulação (definição de alternativas) e a tomada de decisão. Depois dela vem a avaliação (análise de resultados).',
      },
      {
        id: 'm1e5',
        question:
          'Qual das alternativas descreve corretamente uma família monoparental?',
        options: [
          'Família composta exclusivamente por pessoas idosas',
          'Família formada por um único responsável adulto e seus filhos',
          'Família com membros de pelo menos três gerações na mesma residência',
          'Família formada por casais sem filhos',
        ],
        correctIndex: 1,
        explanation:
          'Família monoparental é aquela chefiada por um único responsável adulto (pai ou mãe) com seus filhos, sem a presença de cônjuge/companheiro. É uma das configurações mais frequentes entre as famílias atendidas pelo SUAS e apresenta maior vulnerabilidade, especialmente quando chefiada por mulheres negras em situação de pobreza.',
      },
    ],
  },
  {
    id: 'modulo2',
    number: 2,
    title: 'Prática Socioeducativa no SUAS',
    subtitle: 'Proteção Social Básica e Especial, Acolhimento, Redes',
    color: COLORS.module2,
    icon: '🤝',
    lessons: [
      {
        id: 'm2l1',
        title: 'Educador Social na Proteção Social Básica: PAIF e SCFV',
        content:
          'A Proteção Social Básica (PSB) tem como porta de entrada o CRAS — Centro de Referência de Assistência Social. Ela é voltada para famílias em situação de vulnerabilidade social, com o objetivo de prevenir situações de risco e fortalecer os vínculos familiares e comunitários.\n\n' +
          'O PAIF (Serviço de Proteção e Atendimento Integral à Família) é ofertado exclusivamente pelo CRAS e constitui o principal serviço da PSB. Tem caráter continuado e trabalha com famílias por meio de acompanhamento individualizado e em grupos. O educador social atua no PAIF facilitando oficinas temáticas, grupos socioeducativos, visitas domiciliares e ações comunitárias.\n\n' +
          'O SCFV (Serviço de Convivência e Fortalecimento de Vínculos) é complementar ao PAIF e organizado por ciclos de vida: crianças (0-6 anos), crianças e adolescentes (6-15 anos), adolescentes (15-17 anos), jovens (18-29 anos), adultos (30-59 anos) e idosos (60+). Cada ciclo tem objetivos, linguagens e metodologias específicas.\n\n' +
          'O papel do educador social na PSB inclui: planejar e executar atividades socioeducativas e culturais; desenvolver oficinas de arte, esporte, cultura e lazer; acompanhar frequência e desenvolvimento dos usuários; mediar conflitos interpessoais; registrar e monitorar as ações realizadas; e articular com as famílias e com a rede local.\n\n' +
          'O trabalho deve respeitar a heterogeneidade dos grupos, partir das potencialidades dos participantes e considerar as especificidades do território. A presença constante e o vínculo com os usuários são diferenciais do educador social.',
        keyPoints: [
          'PAIF: exclusivo do CRAS, acompanhamento continuado de famílias em vulnerabilidade',
          'SCFV: organizado por ciclos de vida, complementar ao PAIF',
          'Educador social no PAIF: oficinas, grupos socioeducativos, visitas domiciliares',
          'SCFV para adolescentes (15-17): foco em protagonismo, projetos de vida e prevenção',
          'Vínculo e escuta são ferramentas centrais do educador social na PSB',
        ],
      },
      {
        id: 'm2l2',
        title: 'Educador Social na Proteção Social Especial: PAEFI e Abordagem Social',
        content:
          'A Proteção Social Especial (PSE) atende famílias e indivíduos que já vivenciam violações de direitos — como violência, negligência, exploração, abandono, trabalho infantil e situação de rua. Divide-se em Média Complexidade (quando o vínculo familiar ainda existe) e Alta Complexidade (quando há rompimento ou ameaça dos vínculos).\n\n' +
          'O PAEFI (Serviço de Proteção e Atendimento Especializado a Famílias e Indivíduos) é ofertado pelo CREAS e atende famílias com direitos violados. O educador social no PAEFI trabalha com grupos reflexivos, atividades socioeducativas, acompanhamento de cumprimento de medidas socioeducativas e mediação familiar. A escuta qualificada e a ética no sigilo das informações são essenciais.\n\n' +
          'O Serviço Especializado em Abordagem Social é ofertado de forma itinerante e busca ativa — nas ruas, praças, terminais, calçadas — para identificar famílias, crianças, adolescentes, adultos e idosos em situação de rua. O educador realiza abordagem respeitosa, oferece informações sobre direitos e serviços, e encaminha para a rede de proteção.\n\n' +
          'A abordagem social exige postura acolhedora, sem julgamentos, com respeito à autonomia do indivíduo. Não se trata de forçar atendimento, mas de criar vínculos de confiança que permitam a reinserção social gradual.\n\n' +
          'Na PSE de Alta Complexidade, os serviços são os de acolhimento institucional (abrigos, casas-lar, repúblicas) e familiar — onde o educador social tem papel central nas rotinas e no processo de desligamento.',
        keyPoints: [
          'PSE Média Complexidade: vínculo familiar fragilizado mas existente — CREAS/PAEFI',
          'PSE Alta Complexidade: rompimento dos vínculos — acolhimento institucional ou familiar',
          'Abordagem Social: busca ativa itinerante em espaços públicos para pessoas em situação de rua',
          'Princípio da abordagem: respeito à autonomia — não forçar, mas criar vínculo de confiança',
          'PAEFI: trabalho com grupos reflexivos, mediação familiar e acompanhamento socioeducativo',
        ],
      },
      {
        id: 'm2l3',
        title: 'Acolhimento Institucional e Familiar: Rotinas, Mediação e Autonomia',
        content:
          'Os serviços de acolhimento integram a PSE de Alta Complexidade e destinam-se a crianças, adolescentes, adultos, idosos e pessoas com deficiência que tiveram seus vínculos familiares rompidos ou encontram-se em situação de ameaça grave. O acolhimento é sempre uma medida provisória e excepcional — o objetivo final é a reintegração familiar ou a colocação em família substituta.\n\n' +
          'As modalidades de acolhimento são: Casa de Acolhimento (abrigo institucional) — atende grupos de até 20 pessoas; Casa-Lar — até 10 crianças/adolescentes com presença de educador residente; República — para jovens de 18-21 anos com foco em autonomia; Residência Inclusiva — para adultos com deficiência; e Família Acolhedora — família cadastrada que recebe temporariamente a criança ou adolescente.\n\n' +
          'O educador social no acolhimento tem papel estruturante: organiza as rotinas diárias (alimentação, higiene, sono, escola, lazer); medeia conflitos entre acolhidos; articula com as famílias de origem para o processo de reintegração; acompanha o desenvolvimento individual de cada acolhido; elabora e registra o Plano Individual de Atendimento (PIA).\n\n' +
          'A construção de autonomia é objetivo central, especialmente com adolescentes próximos do desligamento e jovens adultos. Isso inclui: educação para o trabalho, gestão financeira básica, cuidados com saúde e organização doméstica.\n\n' +
          'A mediação de conflitos exige habilidade para escutar todos os lados, identificar necessidades subjacentes e propor acordos coletivos de convivência. O regulamento interno da unidade, construído coletivamente, é uma ferramenta importante.',
        keyPoints: [
          'Acolhimento: medida provisória e excepcional — objetivo é reinserção familiar',
          'Casa de Acolhimento: até 20 pessoas; Casa-Lar: até 10 crianças com educador residente',
          'PIA (Plano Individual de Atendimento): ferramenta de acompanhamento individualizado',
          'República: para jovens 18-21 anos, foco na construção de autonomia',
          'Mediação de conflitos: escuta, identificação de necessidades e acordos coletivos de convivência',
        ],
      },
      {
        id: 'm2l4',
        title: 'Rede de Proteção Social: Fluxos, Encaminhamentos e Intersetorialidade',
        content:
          'A rede de proteção social é formada por todos os serviços, programas, projetos e benefícios das políticas públicas que atuam na garantia de direitos. No SUAS, ela envolve não apenas a assistência social, mas também saúde, educação, justiça, habitação, trabalho e cultura.\n\n' +
          'O fluxo de atendimento segue uma lógica de complexidade crescente: o CRAS atende a demanda de famílias em vulnerabilidade (PSB). Quando há violação de direitos, o encaminhamento vai para o CREAS (PSE Média Complexidade). Em casos de rompimento de vínculos ou risco grave, aciona-se a alta complexidade (acolhimento). O fluxo pode ocorrer em qualquer direção — inclusive do CREAS de volta ao CRAS.\n\n' +
          'A intersetorialidade significa que os serviços de diferentes políticas agem de forma articulada, sem sobreposição e sem lacunas. Na prática, o educador social precisa conhecer e acionar: UBS e CAPS (saúde); escolas e CRAS (educação e assistência); Conselho Tutelar, Vara da Infância e Defensoria Pública (justiça); Centros de Referência em Direitos Humanos e CNDM (direitos humanos).\n\n' +
          'O encaminhamento efetivo — não apenas o encaminhamento formal — exige acompanhamento: o educador verifica se o usuário foi atendido no serviço indicado e, se não, investiga os obstáculos. Encaminhar não é suficiente; monitorar o acesso é responsabilidade do profissional.\n\n' +
          'O Prontuário SUAS e o CadÚnico são instrumentos que permitem o compartilhamento de informações entre serviços, facilitando a continuidade do atendimento e evitando que a família precise repetir sua história em cada ponto da rede.',
        keyPoints: [
          'Fluxo SUAS: CRAS (PSB) → CREAS (PSE Média) → Alta Complexidade (acolhimento)',
          'Intersetorialidade: assistência social + saúde + educação + justiça agindo articulados',
          'Encaminhamento efetivo: o profissional monitora se o acesso ao serviço indicado ocorreu',
          'Conselho Tutelar: acionado em casos de violação de direitos de crianças e adolescentes',
          'Prontuário SUAS e CadÚnico: instrumentos de compartilhamento de informações na rede',
        ],
      },
    ],
    exercises: [
      {
        id: 'm2e1',
        question:
          'O PAIF (Serviço de Proteção e Atendimento Integral à Família) é ofertado exclusivamente:',
        options: [
          'No CREAS, para famílias em situação de risco e violação de direitos',
          'No CRAS, como principal serviço da Proteção Social Básica',
          'Nos serviços de acolhimento institucional de alta complexidade',
          'Nas Unidades Básicas de Saúde, em parceria com o SUAS',
        ],
        correctIndex: 1,
        explanation:
          'O PAIF é ofertado EXCLUSIVAMENTE no CRAS (Centro de Referência de Assistência Social) e constitui o serviço mais importante da Proteção Social Básica. Tem caráter continuado e trabalha com famílias em situação de vulnerabilidade social para prevenir riscos e fortalecer vínculos. O CREAS oferta o PAEFI, que é diferente.',
      },
      {
        id: 'm2e2',
        question:
          'O Serviço de Convivência e Fortalecimento de Vínculos (SCFV) é organizado por:',
        options: [
          'Nível de complexidade das violações de direito sofridas',
          'Ciclos de vida dos participantes (crianças, adolescentes, jovens, adultos e idosos)',
          'Renda familiar — apenas para beneficiários do Bolsa Família',
          'Grau de escolaridade dos usuários atendidos',
        ],
        correctIndex: 1,
        explanation:
          'O SCFV organiza seus grupos por ciclos de vida: crianças (0-6 anos), crianças e adolescentes (6-15 anos), adolescentes (15-17 anos), jovens (18-29 anos), adultos (30-59 anos) e idosos (60+). Cada ciclo tem objetivos e metodologias específicos. Embora priorize beneficiários do Bolsa Família, não é restrito a eles.',
      },
      {
        id: 'm2e3',
        question:
          'O Serviço Especializado em Abordagem Social caracteriza-se por:',
        options: [
          'Atendimento fixo e agendado no CREAS para pessoas em situação de rua',
          'Busca ativa itinerante em espaços públicos para identificar pessoas em vulnerabilidade',
          'Atendimento domiciliar obrigatório para todas as famílias inscritas no CadÚnico',
          'Acompanhamento judicial de medidas protetivas determinadas pelo juiz',
        ],
        correctIndex: 1,
        explanation:
          'O Serviço Especializado em Abordagem Social é itinerante — vai até onde estão as pessoas (ruas, praças, terminais). Seu objetivo é identificar famílias, crianças, adolescentes e adultos em situação de rua ou de extrema vulnerabilidade, oferecer informações sobre direitos e serviços, e encaminhá-los para a rede de proteção social, respeitando sempre a autonomia do indivíduo.',
      },
      {
        id: 'm2e4',
        question:
          'O acolhimento institucional no SUAS é considerado uma medida:',
        options: [
          'Definitiva, quando a reintegração familiar não é possível',
          'Punitiva, para famílias que descumprem obrigações com os filhos',
          'Provisória e excepcional, com objetivo de reintegração familiar ou colocação em família substituta',
          'Permanente para crianças em situação de abandono comprovado',
        ],
        correctIndex: 2,
        explanation:
          'O acolhimento institucional é SEMPRE uma medida provisória e excepcional — nunca definitiva ou punitiva. O objetivo é proteger temporariamente quem teve os vínculos familiares rompidos, enquanto se trabalha a reintegração à família de origem ou, quando inviável, a colocação em família substituta (guarda, tutela ou adoção). O ECA (Lei 8.069/1990) reforça esse princípio.',
      },
      {
        id: 'm2e5',
        question:
          'O que significa realizar um "encaminhamento efetivo" no trabalho em rede?',
        options: [
          'Registrar no prontuário que o encaminhamento foi feito e arquivar o caso',
          'Entregar ao usuário o endereço do serviço e orientar que ele compareça',
          'Monitorar se o usuário foi efetivamente atendido no serviço indicado e identificar obstáculos',
          'Ligar para o serviço receptor apenas quando o usuário retorna com queixas',
        ],
        correctIndex: 2,
        explanation:
          'Encaminhamento efetivo significa ir além do registro formal — o profissional acompanha se o usuário conseguiu ser atendido no serviço para o qual foi encaminhado. Se não conseguiu, investiga os obstáculos (falta de documentos, horário, distância, medo) e intervém para garantir o acesso. Apenas registrar o encaminhamento não garante a proteção do usuário.',
      },
    ],
  },
  {
    id: 'modulo3',
    number: 3,
    title: 'Metodologia do Trabalho Social',
    subtitle: 'Abordagem, Vínculos, Interdisciplinaridade e Planejamento',
    color: COLORS.module3,
    icon: '📋',
    lessons: [
      {
        id: 'm3l1',
        title: 'Trabalho Social com Famílias, Indivíduos e Grupos',
        content:
          'O trabalho social é o conjunto de ações técnicas e metodológicas realizadas com indivíduos, famílias e grupos para promover a proteção social, fortalecer capacidades e garantir direitos. No SUAS, ele ocorre em três modalidades principais: atendimento individual, visita domiciliar e trabalho em grupo.\n\n' +
          'O atendimento individual é voltado para situações específicas que exigem sigilo e escuta aprofundada — acolhimento de denúncias, planos individuais de atendimento, mediações familiares. O educador social realiza entrevistas, elabora registros e articula encaminhamentos de forma personalizada.\n\n' +
          'A visita domiciliar permite conhecer o contexto real de vida da família: condições de moradia, dinâmica relacional, recursos comunitários disponíveis. Deve ser agendada e ter objetivo claro — não é fiscalização, mas ferramenta de aproximação e compreensão. O sigilo e o respeito ao espaço da família são fundamentais.\n\n' +
          'O trabalho em grupo cria espaços coletivos de troca, aprendizagem mútua e fortalecimento de vínculos. Pode ser: grupos socioeducativos (transmissão de informações e reflexão); grupos reflexivos (mudança de comportamento — ex.: homens autores de violência); grupos operativos (resolução de tarefas); e grupos terapêuticos (conduzidos por profissionais de saúde mental).\n\n' +
          'Em todos os casos, o educador social deve registrar as ações realizadas no Prontuário SUAS e no RMA (Registro Mensal de Atendimentos), garantindo a continuidade do trabalho e subsidiando a gestão.',
        keyPoints: [
          'Três modalidades: atendimento individual, visita domiciliar e trabalho em grupo',
          'Visita domiciliar: deve ser agendada e ter objetivo definido — não é fiscalização',
          'Grupos socioeducativos: troca de informações e reflexão coletiva sobre temas relevantes',
          'Grupos reflexivos: voltados para mudança de comportamento (ex.: homens autores de violência)',
          'Registro: Prontuário SUAS e RMA garantem continuidade e subsidiam a gestão',
        ],
      },
      {
        id: 'm3l2',
        title: 'Abordagem Social em Contextos de Alta Vulnerabilidade',
        content:
          'A abordagem social em contextos de alta vulnerabilidade — como situação de rua, abrigos e comunidades com alta incidência de violência — exige competências específicas do educador social: manejo emocional, escuta sem julgamento, tolerância à frustração e criatividade metodológica.\n\n' +
          'Nas ruas, a abordagem deve ser respeitosa, gradual e não invasiva. O vínculo de confiança se constrói com o tempo, por meio de presença constante, consistência nas promessas e respeito à decisão do indivíduo de aceitar ou não o atendimento. A redução de danos é uma estratégia fundamental nesse contexto.\n\n' +
          'Nos abrigos, a vulnerabilidade se expressa de forma diferente: conflitos de convivência, sentimento de perda de autonomia, luto pelo afastamento familiar, estigma social. O educador social precisa mediar esses conflitos, criar espaços de participação e garantir que o acolhimento seja mais do que custódia — seja também cuidado e desenvolvimento.\n\n' +
          'Em territórios com alta incidência de violência (tráfico, milícia), o trabalho social exige negociação de acesso, conhecimento das dinâmicas locais e proteção dos profissionais. O princípio da não exposição dos usuários a riscos adicionais deve guiar todas as decisões.\n\n' +
          'A autocuidado do profissional também é tema relevante: o contato permanente com situações de sofrimento e violação de direitos pode gerar sofrimento psíquico. A supervisão técnica e os espaços de troca entre a equipe são mecanismos protetores.',
        keyPoints: [
          'Abordagem nas ruas: gradual, respeitosa, não invasiva — vínculo se constrói com tempo',
          'Redução de danos: estratégia que aceita a realidade do indivíduo como ponto de partida',
          'Nos abrigos: conflitos de convivência, perda de autonomia e estigma são desafios centrais',
          'Territórios de violência: negociação de acesso e proteção dos usuários são prioridade',
          'Autocuidado do profissional: supervisão técnica e troca entre equipe previnem sofrimento',
        ],
      },
      {
        id: 'm3l3',
        title: 'Acolhimento, Escuta Qualificada, Vínculos e Acompanhamento Sociofamiliar',
        content:
          'O acolhimento é a postura ética e técnica de receber o usuário com atenção, respeito e sem julgamentos. Não se confunde com concordar com tudo que ele diz, mas com criar um ambiente seguro onde ele se sinta ouvido e respeitado. É a base de toda relação profissional no SUAS.\n\n' +
          'A escuta qualificada vai além de ouvir palavras — envolve observar linguagem corporal, pausas, emoções expressas e conteúdos não ditos. O profissional está atento não apenas ao que é relatado, mas ao como e ao contexto em que é relatado. Perguntas abertas, reformulações e validação emocional são técnicas de escuta qualificada.\n\n' +
          'A construção de vínculos é um processo gradual que exige presença consistente, cumprimento de acordos, confidencialidade e respeito à singularidade do sujeito. O vínculo não é um fim em si mesmo, mas um instrumento para o trabalho social — permite acessar realidades que formulários não capturam.\n\n' +
          'O acompanhamento sociofamiliar é o trabalho continuado com famílias, realizado por meio de visitas domiciliares, atendimentos individuais e coletivos, com objetivos definidos em Plano de Acompanhamento Familiar. Monitora-se o cumprimento das condicionalidades (quando houver), o acesso a serviços da rede e o fortalecimento das capacidades familiares.\n\n' +
          'O desligamento do serviço deve ser planejado, gradual e participativo — a família precisa estar preparada e com outros vínculos de proteção consolidados antes do encerramento do acompanhamento.',
        keyPoints: [
          'Acolhimento: postura ética de receber sem julgamento — não é concordar, é respeitar',
          'Escuta qualificada: perguntas abertas, validação emocional, atenção ao não-verbal',
          'Vínculo: instrumento do trabalho social, construído com presença, consistência e sigilo',
          'Acompanhamento sociofamiliar: plano com objetivos, monitoramento e revisão periódica',
          'Desligamento: planejado e gradual — família precisa estar fortalecida antes do encerramento',
        ],
      },
      {
        id: 'm3l4',
        title: 'Interdisciplinaridade, Planejamento e Avaliação de Ações Socioeducativas',
        content:
          'O trabalho no SUAS é, por natureza, interdisciplinar: psicólogos, assistentes sociais, educadores sociais, pedagogos, advogados e outros profissionais atuam juntos. A multidisciplinaridade significa que diferentes saberes estão presentes; a interdisciplinaridade exige que esses saberes dialoguem e produzam sínteses integradas.\n\n' +
          'Na prática da equipe, a interdisciplinaridade se manifesta em: reuniões de caso (discussão coletiva de situações complexas); supervisão técnica compartilhada; elaboração conjunta de planos de atendimento; e tomada de decisões coletivas. Cada profissional contribui com seu olhar específico, mas a resposta ao usuário é construída em conjunto.\n\n' +
          'O planejamento das ações socioeducativas deve seguir uma lógica clara: diagnóstico situacional (quem são os usuários, quais suas necessidades); definição de objetivos (o que se quer alcançar); escolha de metodologia (como chegar lá); execução; registro; monitoramento e avaliação.\n\n' +
          'O monitoramento verifica se as ações estão sendo realizadas conforme planejado. A avaliação analisa se os objetivos foram alcançados e quais foram os impactos para os usuários. Ambos devem ser processos contínuos, não apenas ao final do projeto.\n\n' +
          'O registro sistemático — em diários de campo, prontuários, relatórios e atas — é responsabilidade ética do educador social e condição para a gestão do conhecimento no serviço.',
        keyPoints: [
          'Multidisciplinaridade: vários saberes presentes; interdisciplinaridade: saberes que dialogam',
          'Reunião de caso: espaço coletivo de discussão e tomada de decisão interdisciplinar',
          'Ciclo do planejamento: diagnóstico → objetivos → metodologia → execução → avaliação',
          'Monitoramento: verifica se as ações ocorrem conforme o plano (processo contínuo)',
          'Registro sistemático: responsabilidade ética e instrumento de gestão do conhecimento',
        ],
      },
    ],
    exercises: [
      {
        id: 'm3e1',
        question:
          'Qual das alternativas descreve corretamente a visita domiciliar como instrumento do trabalho social?',
        options: [
          'Ação de fiscalização das condições de moradia para aplicação de sanções à família',
          'Ferramenta de aproximação e compreensão do contexto familiar, que deve ser agendada e ter objetivo definido',
          'Substituição do atendimento presencial no CRAS para famílias que não comparecem',
          'Procedimento exclusivo do assistente social, vedado ao educador social',
        ],
        correctIndex: 1,
        explanation:
          'A visita domiciliar é uma ferramenta de aproximação e compreensão — não de fiscalização. Deve ser agendada (respeitando a família), ter objetivo claro e ser registrada. Permite conhecer o contexto real de vida, as dinâmicas relacionais e os recursos disponíveis. O educador social pode e deve realizá-la, sempre com postura ética e respeitando o espaço familiar.',
      },
      {
        id: 'm3e2',
        question:
          'A diferença entre multidisciplinaridade e interdisciplinaridade no trabalho em equipe é:',
        options: [
          'Multidisciplinaridade: apenas assistentes sociais; interdisciplinaridade: todas as profissões',
          'Multidisciplinaridade: profissionais trabalham separadamente; interdisciplinaridade: saberes dialogam e produzem sínteses integradas',
          'São termos sinônimos que descrevem a mesma prática de trabalho em equipe',
          'Interdisciplinaridade é restrita a equipes com mais de 10 profissionais',
        ],
        correctIndex: 1,
        explanation:
          'Na multidisciplinaridade, vários saberes estão presentes mas cada um age de forma separada. Na interdisciplinaridade, os saberes dialogam, influenciam-se mutuamente e produzem respostas integradas. No SUAS, isso se manifesta em reuniões de caso, supervisão compartilhada e elaboração conjunta de planos de atendimento.',
      },
      {
        id: 'm3e3',
        question:
          'O que caracteriza a escuta qualificada no atendimento socioeducativo?',
        options: [
          'Registrar apenas o que o usuário relata verbalmente, sem interpretações',
          'Ouvir palavras, observar linguagem corporal, validar emoções e usar perguntas abertas',
          'Concordar com todas as demandas do usuário para construir um vínculo positivo',
          'Realizar atendimento apenas com psicólogos presentes para garantir qualidade técnica',
        ],
        correctIndex: 1,
        explanation:
          'Escuta qualificada é uma postura técnica que vai além de ouvir palavras: observa linguagem corporal, pausas, emoções expressas e conteúdos não ditos. Usa perguntas abertas (que permitem livre expressão), reformulações e validação emocional para criar um espaço seguro. Não significa concordar com tudo, mas garantir que o usuário se sinta genuinamente ouvido e respeitado.',
      },
      {
        id: 'm3e4',
        question:
          'No planejamento de ações socioeducativas, qual é a sequência correta do ciclo?',
        options: [
          'Execução → Diagnóstico → Objetivos → Monitoramento → Avaliação',
          'Objetivos → Diagnóstico → Metodologia → Avaliação → Execução',
          'Diagnóstico → Objetivos → Metodologia → Execução → Monitoramento → Avaliação',
          'Avaliação → Diagnóstico → Execução → Registro → Objetivos',
        ],
        correctIndex: 2,
        explanation:
          'O ciclo correto do planejamento socioeducativo é: Diagnóstico (conhecer a realidade) → Objetivos (o que se quer alcançar) → Metodologia (como chegar lá) → Execução (colocar em prática) → Monitoramento (verificar se está ocorrendo conforme o plano) → Avaliação (analisar resultados e impactos). O diagnóstico sempre vem antes dos objetivos.',
      },
      {
        id: 'm3e5',
        question:
          'Em contextos de alta vulnerabilidade, a abordagem social a pessoas em situação de rua deve ser:',
        options: [
          'Direta e objetiva, exigindo que a pessoa se dirija imediatamente ao abrigo mais próximo',
          'Feita apenas por assistentes sociais e psicólogos, não por educadores sociais',
          'Gradual, respeitosa e não invasiva, construindo vínculo de confiança e respeitando a autonomia',
          'Registrada na delegacia antes de qualquer contato com a pessoa abordada',
        ],
        correctIndex: 2,
        explanation:
          'A abordagem social em situação de rua deve ser gradual, respeitosa e não invasiva. O vínculo de confiança se constrói com presença constante, consistência nas promessas feitas e respeito à decisão da pessoa de aceitar ou não o atendimento. Forçar o retorno a serviços viola a autonomia e tende a afastar o indivíduo da rede de proteção.',
      },
    ],
  },
  {
    id: 'modulo4',
    number: 4,
    title: 'Temas Contemporâneos e Diretrizes',
    subtitle: 'Drogas, Acolhimento, Direitos Humanos e Normas da ONU',
    color: COLORS.module4,
    icon: '🌍',
    lessons: [
      {
        id: 'm4l1',
        title: 'Política Nacional sobre Drogas e Redução de Danos',
        content:
          'A Política Nacional sobre Drogas (PNAD), instituída pelo Decreto nº 9.761/2019 e baseada na Lei 11.343/2006 (Lei de Drogas), orienta as ações do Estado brasileiro em relação ao uso, dependência e tráfico de substâncias psicoativas. No âmbito social, o educador social atua principalmente com usuários e dependentes, não com traficantes.\n\n' +
          'A dependência química é reconhecida como doença crônica, com determinantes biológicos, psicológicos e sociais. Isso significa que o dependente é, antes de tudo, um sujeito de direitos que necessita de cuidado — e não apenas de punição ou internação compulsória. A abordagem integral exige ações nas áreas de saúde, assistência social, educação e segurança pública.\n\n' +
          'A Redução de Danos (RD) é uma estratégia de saúde pública que aceita a realidade do uso de drogas como ponto de partida, sem exigir abstinência imediata. Seu objetivo é minimizar os danos físicos, psicológicos e sociais do uso, por meio de ações como: distribuição de insumos (seringas, cachimbos); educação sobre uso mais seguro; acesso a serviços de saúde; e promoção de cidadania.\n\n' +
          'No SUAS, a redução de danos orienta a abordagem a usuários de drogas em situação de rua. O educador social não condiciona o atendimento à abstinência — o vínculo se constrói a partir de onde a pessoa está, respeitando sua autonomia e seu tempo.\n\n' +
          'A rede de atenção ao usuário de drogas articula: CAPS AD (Centro de Atenção Psicossocial Álcool e Drogas), Consultório na Rua, Unidades de Acolhimento (UA), Comunidades Terapêuticas (com cadastro no SUAS) e serviços de assistência social. A articulação intersetorial é indispensável.',
        keyPoints: [
          'Lei 11.343/2006: Lei de Drogas — diferencia usuário (saúde) de traficante (segurança pública)',
          'Dependência química: doença crônica — o dependente é sujeito de direitos, não apenas infrator',
          'Redução de Danos: aceita realidade do uso, minimiza riscos sem exigir abstinência imediata',
          'No SUAS: atendimento não condicionado à abstinência — vínculo a partir de onde a pessoa está',
          'CAPS AD e Consultório na Rua: principais serviços de saúde na rede de atenção às drogas',
        ],
      },
      {
        id: 'm4l2',
        title: 'Acolhimento de Crianças e Adolescentes: Resolução CNAS/CONANDA nº 1/2009',
        content:
          'As Orientações Técnicas para Serviços de Acolhimento para Crianças e Adolescentes foram instituídas pela Resolução Conjunta CNAS/CONANDA nº 1, de 18 de junho de 2009. Esse documento é a principal referência normativa para o trabalho do educador social em serviços de acolhimento.\n\n' +
          'Os princípios fundamentais que orientam os serviços de acolhimento são: excepcionalidade e provisoriedade da medida (o acolhimento é último recurso e deve ser breve); preservação e fortalecimento dos vínculos familiares e comunitários; garantia de ambiente com estrutura física e relações interpessoais adequadas ao desenvolvimento; e respeito à história de vida e identidade de cada criança e adolescente.\n\n' +
          'O documento estabelece diretrizes sobre: organização do espaço físico (deve ter ambiente domiciliar, não institucional); composição da equipe; elaboração e revisão do PIA (Plano Individual de Atendimento); articulação com a família de origem; e processo de desligamento e preparação para a vida autônoma.\n\n' +
          'O educador social nos serviços de acolhimento deve: estar presente nas rotinas do cotidiano (alimentação, higiene, escola, sono, lazer); construir vínculos afetivos seguros sem criar dependência; respeitar a individualidade de cada acolhido; registrar eventos significativos no prontuário; e participar das reuniões de equipe e das revisões do PIA.\n\n' +
          'A preparação para o desligamento — seja por reintegração familiar, adoção ou maioridade — deve começar cedo, ser gradual, e incluir o adolescente como protagonista do seu próprio processo.',
        keyPoints: [
          'Resolução CNAS/CONANDA nº 1/2009: principal normativa dos serviços de acolhimento infanto-juvenil',
          'Princípio central: excepcionalidade e provisoriedade — acolhimento como último recurso',
          'Ambiente deve ser domiciliar — não institucional, hospitalar ou prisional',
          'PIA revisado periodicamente com participação da criança/adolescente e da família',
          'Preparação para desligamento: gradual, com o acolhido como protagonista do processo',
        ],
      },
      {
        id: 'm4l3',
        title: 'Declaração Universal dos Direitos Humanos e Convenção sobre os Direitos da Criança',
        content:
          'A Declaração Universal dos Direitos Humanos (DUDH) foi proclamada pela ONU em 10 de dezembro de 1948, após os horrores da Segunda Guerra Mundial. Seus 30 artigos estabelecem os direitos fundamentais de todo ser humano: vida, liberdade, segurança, dignidade, igualdade perante a lei, não discriminação, educação, trabalho, saúde, entre outros.\n\n' +
          'Para o trabalho do educador social, a DUDH é o fundamento ético de toda a prática: cada usuário atendido é sujeito de direitos inalienáveis, independentemente de sua situação social, raça, etnia, gênero, religião, nacionalidade ou qualquer outra condição. Essa é a base do respeito à dignidade humana no SUAS.\n\n' +
          'A Convenção sobre os Direitos da Criança (CDC) foi aprovada pela ONU em 1989 e ratificada pelo Brasil em 1990. É o tratado de direitos humanos mais amplamente ratificado do mundo. Estabelece quatro princípios fundamentais: não discriminação; interesse superior da criança; direito à vida, sobrevivência e desenvolvimento; e respeito às opiniões da criança (participação).\n\n' +
          'A CDC divide os direitos em três grupos: direitos de provisão (saúde, educação, alimentação, moradia); direitos de proteção (contra violência, exploração, abandono, tráfico); e direitos de participação (ser ouvida, expressar opiniões, participar de decisões que a afetam).\n\n' +
          'No ECA (Lei 8.069/1990), o Brasil incorporou os princípios da CDC ao ordenamento nacional, consagrando a doutrina da proteção integral e o princípio do melhor interesse da criança como guias para todas as decisões e intervenções que envolvam pessoas com menos de 18 anos.',
        keyPoints: [
          'DUDH (1948): 30 artigos — base ética do respeito à dignidade humana em qualquer intervenção social',
          'CDC (1989/ONU): ratificada pelo Brasil em 1990 — tratado de DH mais ratificado do mundo',
          'Quatro princípios da CDC: não discriminação, interesse superior, vida/desenvolvimento, participação',
          'Direitos da CDC: provisão (saúde, educação) + proteção (contra violência) + participação (ser ouvida)',
          'ECA/1990: incorpora a CDC ao Brasil — doutrina da proteção integral e melhor interesse da criança',
        ],
      },
      {
        id: 'm4l4',
        title: 'Diretrizes RIAD e Regras de Beijing: Justiça Juvenil na ONU',
        content:
          'As Diretrizes das Nações Unidas para a Prevenção da Delinquência Juvenil — conhecidas como Diretrizes de Riad — foram adotadas pela ONU em 1990. Seu foco é a prevenção, não a punição: reconhecem que a delinquência juvenil é em grande parte resultado de exclusão social, pobreza e falta de oportunidades, e não de má índole do adolescente.\n\n' +
          'As RIAD estabelecem que a prevenção deve começar na infância e envolver: família (ambiente acolhedor e afetivo); escola (inclusão, permanência e desenvolvimento); comunidade (espaços de lazer, cultura e participação); e mídia (conteúdos positivos e não estigmatizantes). O Estado tem obrigação de criar condições para o desenvolvimento saudável dos jovens.\n\n' +
          'As Regras Mínimas das Nações Unidas para a Administração da Justiça da Infância e da Juventude — Regras de Beijing — foram adotadas em 1985. São anteriores às RIAD e focam no tratamento do adolescente que já cometeu ato infracional, estabelecendo garantias processuais e princípios de humanização da resposta do Estado.\n\n' +
          'Os princípios centrais das Regras de Beijing incluem: proporcionalidade da medida ao ato e às circunstâncias do adolescente; preferência por medidas não privativas de liberdade (socioeducativas em meio aberto); vedação a penas cruéis ou degradantes; direito a assistência jurídica; e reinserção social como objetivo final.\n\n' +
          'No Brasil, o ECA incorpora esses princípios: a privação de liberdade (internação) é medida excepcional e só se aplica em casos de ato infracional grave, com violência ou ameaça. O SINASE (Sistema Nacional de Atendimento Socioeducativo — Lei 12.594/2012) regulamenta a execução das medidas socioeducativas com base nesses referenciais internacionais.',
        keyPoints: [
          'RIAD (1990): prevenção da delinquência juvenil — foco em família, escola, comunidade e mídia',
          'RIAD reconhece: delinquência é resultado de exclusão social — prevenção é melhor que punição',
          'Regras de Beijing (1985): garantias processuais para adolescentes em conflito com a lei',
          'Beijing: preferência por medidas não privativas de liberdade; proporcionalidade ao ato',
          'SINASE (Lei 12.594/2012): regulamenta medidas socioeducativas no Brasil com base nas normas da ONU',
        ],
      },
    ],
    exercises: [
      {
        id: 'm4e1',
        question:
          'A estratégia de Redução de Danos no trabalho com usuários de drogas caracteriza-se por:',
        options: [
          'Exigir abstinência imediata como condição para acesso aos serviços socioassistenciais',
          'Aceitar a realidade do uso como ponto de partida e minimizar riscos sem impor abstinência',
          'Encaminhar todos os usuários para internação compulsória em comunidades terapêuticas',
          'Restringir o atendimento a usuários que comprovem vínculos familiares ativos',
        ],
        correctIndex: 1,
        explanation:
          'A Redução de Danos aceita a realidade do uso de drogas como ponto de partida — sem condicionar o atendimento à abstinência. Minimiza riscos físicos, psicológicos e sociais por meio de educação, distribuição de insumos e promoção do acesso a serviços. No SUAS, isso significa construir vínculo a partir de onde a pessoa está, respeitando sua autonomia e seu tempo.',
      },
      {
        id: 'm4e2',
        question:
          'A Resolução Conjunta CNAS/CONANDA nº 1/2009 estabelece que o acolhimento de crianças e adolescentes deve ser:',
        options: [
          'Permanente quando os pais perdem o poder familiar por qualquer motivo',
          'Ofertado prioritariamente em grandes instituições para garantir economia de escala',
          'Uma medida excepcional e provisória, com ambiente domiciliar e preservação de vínculos',
          'Condicionado à comprovação de violência física documentada por laudo médico',
        ],
        correctIndex: 2,
        explanation:
          'A Resolução CNAS/CONANDA nº 1/2009 reforça que o acolhimento é sempre excepcional (último recurso) e provisório (com objetivo de reintegração familiar ou família substituta). O ambiente deve ser domiciliar — não hospitalar, prisional ou de grande internato. Os vínculos familiares e comunitários devem ser preservados e fortalecidos durante o acolhimento.',
      },
      {
        id: 'm4e3',
        question:
          'Quais são os quatro princípios fundamentais da Convenção sobre os Direitos da Criança (CDC/1989)?',
        options: [
          'Punição, proteção, provisão e prevenção',
          'Não discriminação, interesse superior da criança, direito à vida/desenvolvimento e participação',
          'Educação, saúde, moradia e alimentação',
          'Família, escola, comunidade e Estado',
        ],
        correctIndex: 1,
        explanation:
          'Os quatro princípios fundamentais da CDC são: (1) Não discriminação — toda criança tem direitos independentemente de raça, etnia, gênero, religião; (2) Interesse superior da criança — deve guiar todas as decisões; (3) Direito à vida, sobrevivência e desenvolvimento; (4) Participação — a criança tem direito a ser ouvida. O Brasil incorporou esses princípios ao ECA em 1990.',
      },
      {
        id: 'm4e4',
        question:
          'As Diretrizes das Nações Unidas para a Prevenção da Delinquência Juvenil (RIAD, 1990) reconhecem que:',
        options: [
          'A delinquência juvenil é resultado de má índole e deve ser tratada com rigor penal desde cedo',
          'A internação em estabelecimentos fechados é a resposta mais eficaz para adolescentes infratores',
          'A delinquência é em grande parte resultado de exclusão social, e a prevenção deve envolver família, escola e comunidade',
          'O adolescente infrator deve responder penalmente da mesma forma que um adulto',
        ],
        correctIndex: 2,
        explanation:
          'As RIAD adotam uma perspectiva preventiva e social: reconhecem que a delinquência juvenil é em grande parte resultado de exclusão social, pobreza e falta de oportunidades. Por isso, a prevenção deve começar antes do ato infracional, por meio de políticas que envolvam família, escola, comunidade e mídia. Punição sem prevenção é insuficiente e reproduz o ciclo.',
      },
      {
        id: 'm4e5',
        question:
          'O SINASE (Sistema Nacional de Atendimento Socioeducativo — Lei 12.594/2012) regulamenta:',
        options: [
          'Os benefícios do Bolsa Família para famílias com adolescentes em conflito com a lei',
          'A execução das medidas socioeducativas aplicadas a adolescentes autores de atos infracionais',
          'Os serviços de acolhimento institucional para crianças de 0 a 12 anos',
          'As regras de internação compulsória de dependentes químicos em comunidades terapêuticas',
        ],
        correctIndex: 1,
        explanation:
          'O SINASE (Lei 12.594/2012) regulamenta a execução das medidas socioeducativas destinadas a adolescentes que praticaram atos infracionais, com base nos princípios do ECA e nas normas internacionais (Regras de Beijing e RIAD). Estabelece diretrizes para medidas em meio aberto (PSC e LA) e privativas de liberdade (semiliberdade e internação), com foco na reinserção social.',
      },
    ],
  },
];

export function getModule(id: string): Module | undefined {
  return MODULES.find(m => m.id === id);
}
