let baseDados = [
    {
        nomeCurso: "Agronomia",
        descricao: "O curso de Agronomia forma profissionais que atuam no desenvolvimento sustentável do campo, estudando a produção agrícola, a gestão de recursos naturais e a preservação do meio ambiente. Atua em fazendas, empresas agrícolas, órgãos governamentais e instituições de pesquisa.",
        duracao: "5 anos",
        salarioMedio: "R$ 3.000 a R$ 10.000* (varia conforme experiência e local de trabalho)",
        areaConhecimento: "Agrária",
        link: "https://www.guiadacarreira.com.br/blog/agronomia",
        tags: "agronomia, agricultura, campo, produção agrícola, recursos naturais, meio ambiente"
    },
    {
        nomeCurso: "Agropecuária",
        descricao: "O curso de Agropecuária forma profissionais que atuam na produção animal e vegetal, englobando criação de animais, cultivo de plantas e gestão de propriedades rurais. Atua em fazendas, cooperativas e empresas do agronegócio.",
        duracao: "4 anos",
        salarioMedio: "R$ 3.000 a R$ 8.000* (varia conforme experiência e local de trabalho)",
        areaConhecimento: "Agrária",
        link: "https://www.guiadacarreira.com.br/blog/agropecuaria",
        tags: "agropecuária, pecuária, agricultura, produção animal, produção vegetal, fazenda"
    },
    {
        nomeCurso: "Análise e Desenvolvimento de Sistemas",
        descricao: "O curso de Análise e Desenvolvimento de Sistemas forma profissionais que projetam, desenvolvem e implementam sistemas de informação. Atua em empresas de tecnologia, bancos, instituições financeiras e diversas outras organizações.",
        duracao: "4 anos",
        salarioMedio: "R$ 4.000 a R$ 12.000* (varia conforme experiência e tecnologia)",
        areaConhecimento: "Tecnologia da Informação",
        link: "https://www.guiadacarreira.com.br/blog/analise-e-desenvolvimento-de-sistemas",
        tags: "analise de sistemas, desenvolvimento de sistemas, programação, software, banco de dados, ti, , programacão,programacao, programaçao"
    },
    {
        nomeCurso: "Biomedicina",
        descricao: "O curso de Biomedicina forma profissionais que atuam em diversas áreas da saúde, como análises clínicas, biotecnologia, pesquisa e desenvolvimento de novos produtos. Podem trabalhar em laboratórios, hospitais, clínicas, indústrias e universidades.",
        duracao: "4 anos",
        salarioMedio: "R$ 2.500 a R$ 8.000* (varia conforme experiência, local de trabalho e área de atuação)",
        areaConhecimento: "Saúde",
        link: "https://www.guiadacarreira.com.br/blog/biomedicina",
        tags: "biomedicina, biomédico, análises clínicas, biotecnologia, pesquisa, saúde, saude"
    },
    {
        nomeCurso: "Ciência da Computação",
        descricao: "O curso de Ciência da Computação forma profissionais capazes de projetar, desenvolver e implementar sistemas de software. Atuam em diversas áreas, como desenvolvimento de software, inteligência artificial, segurança da informação e banco de dados.",
        duracao: "4 anos",
        salarioMedio: "R$ 6.000 a R$ 18.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Exatas",
        link: "https://www.guiadacarreira.com.br/blog/ciencia-da-computacao",
        tags: "ciência da computação, programação, software, desenvolvimento, sistemas, algoritmos, dados"
    },
    {
        nomeCurso: "Design Gráfico",
        descricao: "O curso de Design Gráfico forma profissionais que criam e desenvolvem projetos visuais para diversas mídias. Atua em agências de publicidade, editoras, empresas de marketing e design, desenvolvendo logotipos, materiais impressos, websites e interfaces digitais.",
        duração: "4 anos",
        salarioMedio: "R$ 2.500 a R$ 8.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Artes Visuais",
        link: "https://www.guiadacarreira.com.br/blog/design-grafico",
        tags: "design gráfico, designer, criação visual, logotipo, ilustração, diagramação, interface"
    },
    {
        nomeCurso: "Direito",
        descricao: "O curso de Direito forma profissionais habilitados a atuar na área jurídica, defendendo os direitos e interesses de seus clientes. O curso aborda disciplinas como direito civil, penal, constitucional e processual.",
        duracao: "5 anos",
        salarioMedio: "R$ 5.000 a R$ 15.000* (varia conforme área de atuação e experiência)",
        areaConhecimento: "Direito",
        link: "https://www.guiadacarreira.com.br/blog/curso-direito",
        tags: "direito, advogado, juridico, processo, lei, constituicao, civil, penal, trabalhista"
    },
    {
        nomeCurso: "Enfermagem",
        descricao: "O curso de Enfermagem forma profissionais que atuam na assistência direta ao paciente, realizando cuidados como administração de medicamentos, coleta de exames, monitoramento de sinais vitais e promoção da saúde. Podem trabalhar em hospitais, clínicas, escolas, empresas e comunidades.",
        duracao: "4 anos",
        salarioMedio: "R$ 2.500 a R$ 8.000* (varia conforme experiência, local de trabalho e área de atuação)",
        areaConhecimento: "Saúde",
        link: "https://www.guiadacarreira.com.br/blog/enfermagem",
        tags: "enfermagem, enfermeiro, saúde, hospital, clinica, paciente, cuidado, promoção da saúde"
    },
    {
        nomeCurso: "Engenharia Ambiental",
        descricao: "O curso de Engenharia Ambiental forma profissionais capazes de desenvolver soluções para problemas ambientais. O curso aborda disciplinas como química, biologia, geologia e legislação ambiental.",
        duracao: "5 anos",
        salarioMedio: "R$ 5.000 a R$ 12.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Engenharia e Meio Ambiente",
        link: "https://www.guiadacarreira.com.br/blog/engenharia-ambiental",
        tags: "engenharia ambiental, meio ambiente, sustentabilidade, poluicao, recursos naturais, legislacao ambiental"
    },
    {
        nomeCurso: "Engenharia Biomédica",
        descricao: "O curso de Engenharia Biomédica forma profissionais capazes de desenvolver equipamentos e tecnologias para a área da saúde. O curso aborda disciplinas como biologia, física, eletrônica e programação.",
        duracao: "5 anos",
        salarioMedio: "R$ 6.000 a R$ 15.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Engenharia e Saúde",
        link: "https://www.guiadacarreira.com.br/blog/engenharia-biomedica",
        tags: "engenharia biomedica, biomedicina, saude, equipamento medico, tecnologia medica, biologia, fisica, eletronica"
    },
    {
        nomeCurso: "Engenharia Civil",
        descricao: "O curso de Engenharia Civil forma profissionais capazes de projetar, construir e gerenciar obras de infraestrutura. O curso aborda disciplinas como cálculo, física, resistência dos materiais e desenho técnico.",
        duracao: "5 anos",
        salarioMedio: "R$ 6.000 a R$ 20.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Engenharia",
        link: "https://www.guiadacarreira.com.br/blog/engenharia-civil",
        tags: "engenharia civil, engenheiro, construcao, obra, projeto, edificacao, infraestrutura, calculo, fisica, resistencia dos materiais"
    },
    {
        nomeCurso: "Engenharia da Computação",
        descricao: "O curso de Engenharia da Computação forma profissionais que projetam, desenvolvem e fabricam hardware. Atuam em áreas como desenvolvimento de microprocessadores, sistemas embarcados e redes de computadores.",
        duracao: "5 anos",
        salarioMedio: "R$ 6.000 a R$ 20.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Exatas",
        link: "https://www.guiadacarreira.com.br/blog/engenharia-computacao",
        tags: "engenharia da computação, hardware, software, eletrônica, sistemas embarcados, microprocessadores"
    },
    {
        nomeCurso: "Engenharia Elétrica",
        descricao: "O curso de Engenharia Elétrica forma profissionais capazes de projetar, desenvolver e operar sistemas elétricos. O curso aborda disciplinas como eletromagnetismo, circuitos elétricos e eletrônica.",
        duracao: "5 anos",
        salarioMedio: "R$ 6.000 a $20.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Engenharia",
        link: "https://www.guiadacarreira.com.br/blog/engenharia-eletrica",
        tags: "engenharia eletrica, eletrica, energia, circuitos, eletrônica, eletromagnetismo"
    },
    {
        nomeCurso: "Engenharia de Materiais",
        descricao: "O curso de Engenharia de Materiais forma profissionais capazes de desenvolver novos materiais e otimizar o uso de materiais existentes. O curso aborda disciplinas como metalurgia, ciência dos materiais e caracterização de materiais.",
        duracao: "5 anos",
        salarioMedio: "R$ 6.000 a R$ 18.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Engenharia e Materiais",
        link: "https://www.guiadacarreira.com.br/blog/engenharia-de-materiais",
        tags: "engenharia de materiais, materiais, metalurgia, polímeros, cerâmicos, compostos"
    },
    {
        nomeCurso: "Engenharia Mecânica",
        descricao: "O curso de Engenharia Mecânica forma profissionais capazes de projetar, desenvolver e fabricar máquinas e equipamentos. O curso aborda disciplinas como mecânica dos sólidos, termodinâmica e desenho técnico.",
        duracao: "5 anos",
        salarioMedio: "R$ 6.000 a $20.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Engenharia",
        link: "https://www.guiadacarreira.com.br/blog/engenharia-mecanica",
        tags: "engenharia mecanica, mecanica, maquina, equipamento, projeto, fabricação"
    },
    {
        nomeCurso: "Engenharia de Produção",
        descricao: "O curso de Engenharia de Produção forma profissionais capazes de otimizar processos produtivos e gerenciar sistemas de produção. O curso aborda disciplinas como administração, engenharia industrial e pesquisa operacional.",
        duracao: "5 anos",
        salarioMedio: "R$ 6.000 a R$ 18.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Engenharia e Administração",
        link: "https://www.guiadacarreira.com.br/blog/engenharia-de-producao",
        tags: "engenharia de producao, producao, industria, otimizacao, gerenciamento, administracao"
    },
    {
        nomeCurso: "Engenharia Química",
        descricao: "O curso de Engenharia Química forma profissionais capazes de projetar, operar e otimizar processos industriais que envolvem transformações químicas e físico-químicas. Atua na criação de novos produtos, como combustíveis, polímeros, alimentos e medicamentos, além de desenvolver processos mais eficientes e sustentáveis.",
        duracao: "5 anos",
        salarioMedio: "R$ 6.000 a R$ 15.000* (varia conforme experiência, área de atuação e porte da empresa)",
        areaConhecimento: "Engenharia e Química",
        link: "https://querobolsa.com.br/cursos-e-faculdades/engenharia-quimica",
        tags: "engenharia quimica, química, processos industriais, petroquímica, biotecnologia, meio ambiente, sustentabilidade, produtos químicos"
    },
    {
        nomeCurso: "Engenharia de Software",
        descricao: "O curso de Engenharia de Software forma profissionais capazes de projetar, desenvolver, testar e implementar sistemas de software. O curso aborda disciplinas como programação, engenharia de requisitos, arquitetura de software e gestão de projetos.",
        duracao: "4 anos",
        salarioMedio: "R$ 6.000 a R$ 18.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Tecnologia da Informação",
        link: "https://www.guiadacarreira.com.br/blog/engenharia-de-software",
        tags: "engenharia de software, software, programação, desenvolvimento, sistema, arquitetura, projeto"
    },
    {
        nomeCurso: "Estatística",
        descricao: "O curso de Estatística forma profissionais que coletam, analisam e interpretam dados. Atuam em diversas áreas, como pesquisa, finanças, marketing e ciência de dados.",
        duracao: "4 anos",
        salarioMedio: "R$ 4.000 a R$ 12.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Exatas",
        link: "https://www.guiadacarreira.com.br/blog/estatistica",
        tags: "estatística, dados, análise de dados, probabilidade, inferência estatística, ciência de dados"
    },
    {
        nomeCurso: "Estilista",
        descricao: "O curso de Estilista forma profissionais que criam e desenvolvem roupas, acessórios e coleções de moda. Atua na indústria da moda, em ateliês, marcas próprias ou como consultor de imagem.",
        duração: "4 anos",
        salarioMedio: "R$ 2.500 a R$ 8.000* (varia conforme experiência e reconhecimento no mercado)",
        areaConhecimento: "Artes Visuais",
        link: "https://www.guiadacarreira.com.br/blog/estilista",
        tags: "estilista, moda, roupa, acessório, coleção, design de moda, estilo"
    },
    {
        nomeCurso: "Farmácia",
        descricao: "O curso de Farmácia forma profissionais que atuam na manipulação de medicamentos, dispensação de fármacos, controle de qualidade de medicamentos e cosméticos, além de desenvolver novos medicamentos. Podem trabalhar em farmácias, indústrias farmacêuticas, hospitais e órgãos de vigilância sanitária.",
        duracao: "5 anos",
        salarioMedio: "R$ 2.500 a R$ 8.000* (varia conforme experiência, local de trabalho e área de atuação)",
        areaConhecimento: "Saúde",
        link: "https://www.guiadacarreira.com.br/blog/farmacia",
        tags: "farmacia, farmaceutico, medicamento, droga, manipulação, indústria farmacêutica, vigilância sanitária, saude"
    },
    {
        nomeCurso: "Filosofia",
        descricao: "O curso de Filosofia forma profissionais que estudam os fundamentos da existência, do conhecimento e da realidade. Atua em pesquisa, ensino, consultoria e desenvolvimento de projetos culturais. Desenvolve habilidades de análise crítica e pensamento reflexivo.",
        duracao: "4 anos",
        salarioMedio: "R$ 2.500 a R$ 5.000* (varia conforme experiência e local de trabalho)",
        areaConhecimento: "Humanas",
        link: "https://www.guiadacarreira.com.br/blog/filosofia", // Adapte o link para um site mais específico se necessário
        tags: "filosofia, conhecimento, realidade, pensamento, ética, lógica, pesquisa"
    },
    {
        nomeCurso: "Física",
        descricao: "O curso de Física forma profissionais que estudam os fenômenos naturais e desenvolvem teorias para explicá-los. Atuam em pesquisa, ensino, indústria e desenvolvimento de novas tecnologias.",
        duracao: "4 anos",
        salarioMedio: "R$ 3.000 a R$ 10.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Exatas",
        link: "https://www.guiadacarreira.com.br/blog/fisica",
        tags: "física, física aplicada, mecânica, eletromagnetismo, óptica, física quântica, calculos, cálculos"
    },
    {
        nomeCurso: "Fisioterapia",
        descricao: "O curso de Fisioterapia forma profissionais que atuam na reabilitação de pacientes com lesões, doenças ou disfunções físicas. Utilizam técnicas manuais, eletroterapia e exercícios terapêuticos para promover a recuperação funcional e a qualidade de vida dos pacientes.",
        duracao: "5 anos",
        salarioMedio: "R$ 2.500 a R$ 8.000* (varia conforme experiência, local de trabalho e área de atuação)",
        areaConhecimento: "Saúde",
        link: "https://www.guiadacarreira.com.br/blog/fisioterapia",
        tags: "fisioterapia, fisioterapeuta, reabilitação, lesão, doença, exercício, saúde, saude"
    },
    {
        nomeCurso: "Fonoaudiologia",
        descricao: "O curso de Fonoaudiologia forma profissionais que atuam na avaliação, diagnóstico e tratamento de distúrbios da comunicação humana, como fala, linguagem, voz, audição e deglutição. Atuam em clínicas, hospitais, escolas e empresas.",
        duracao: "5 anos",
        salarioMedio: "R$ 2.500 a R$ 8.000* (varia conforme experiência, local de trabalho e área de atuação)",
        areaConhecimento: "Saúde",
        link: "https://www.guiadacarreira.com.br/blog/fonoaudiologia",
        tags: "fonoaudiologia, fonoaudiólogo, fala, linguagem, voz, audição, deglutição, comunicação, saude"
    },
    {
        nomeCurso: "História",
        descricao: "O curso de História forma profissionais que estudam o passado da humanidade, analisando fatos, documentos e vestígios históricos. Atua em pesquisa, ensino, museus, arquivos e órgãos públicos, interpretando e divulgando o conhecimento histórico.",
        duracao: "4 anos",
        salarioMedio: "R$ 2.500 a R$ 5.000* (varia conforme experiência e local de trabalho)",
        areaConhecimento: "Humanas",
        link: "https://www.guiadacarreira.com.br/blog/historia",
        tags: "história, passado, pesquisa, ensino, professor, historiador, documento histórico"
    },
    {
        nomeCurso: "Letras",
        descricao: "O curso de Letras forma profissionais que dominam línguas estrangeiras e a língua portuguesa. Atua em ensino, tradução, interpretação, produção de textos e atividades culturais. Pode se especializar em diferentes línguas e literaturas.",
        duracao: "4 anos",
        salarioMedio: "R$ 2.500 a R$ 5.000* (varia conforme experiência e local de trabalho)",
        areaConhecimento: "Humanas",
        link: "https://www.guiadacarreira.com.br/blog/letras",
        tags: "letras, língua, literatura, professor, tradutor, interprete, idiomas"
    },
    {
        nomeCurso: "Matemática",
        descricao: "O curso de Matemática forma profissionais capazes de aplicar conhecimentos matemáticos em diversas áreas, como pesquisa, ensino, indústria e finanças. Atuam em desenvolvimento de modelos matemáticos, análise de dados e resolução de problemas complexos.",
        duracao: "4 anos",
        salarioMedio: "R$ 3.000 a R$ 10.000* (varia conforme experiência e área de atuação)",
        areaConhecimento: "Exatas",
        link: "https://www.guiadacarreira.com.br/blog/matematica",
        tags: "matemática, matemática aplicada, estatística, probabilidade, modelagem matemática, análise de dados, numeros, calculos, cálculos"
    },
    {
        nomeCurso: "Medicina",
        descricao: "O curso de Medicina forma profissionais habilitados a diagnosticar, tratar e prevenir doenças, além de promover a saúde e o bem-estar da população. O curso aborda disciplinas como anatomia, fisiologia, patologia e farmacologia.",
        duracao: "6 anos",
        salarioMedio: "R$ 10.000 a R$ 30.000* (varia conforme especialidade e região)",
        areaConhecimento: "Saúde",
        link: "https://www.guiadacarreira.com.br/blog/o-que-se-estuda-em-medicina",
        tags: "medicina, medico, saude, hospital, clinico geral, especialista, residência médica, anatomia, fisiologia, patologia, farmacologia"
    },
    {
        nomeCurso: "Medicina Veterinária",
        descricao: "O curso de Medicina Veterinária forma profissionais capacitados a cuidar da saúde de animais domésticos e silvestres. Atuam em clínicas, hospitais veterinários, fazendas, zoológicos e órgãos públicos, realizando diagnósticos, tratamentos, cirurgias e programas de saúde pública. ",
        duracao: "5 anos",
        salarioMedio: "R$ 3.000 a R$ 10.000* (varia conforme experiência, especialidade e local de trabalho)",
        areaConhecimento: "Saúde",
        link: "https://www.guiadacarreira.com.br/blog/medicina-veterinaria",
        tags: "medicina veterinaria, veterinario, animal, pet, saúde animal, zootecnia, fazenda, zoológico, saude"
    },
    {
        nomeCurso: "Nutrição",
        descricao: "O curso de Nutrição forma profissionais que atuam na promoção da saúde através da alimentação. Elaboram dietas, orientam pacientes sobre hábitos alimentares saudáveis e podem trabalhar em clínicas, hospitais, escolas, empresas e consultórios.",
        duracao: "4 anos",
        salarioMedio: "R$ 2.500 a R$ 8.000* (varia conforme experiência, local de trabalho e área de atuação)",
        areaConhecimento: "Saúde",
        link: "https://www.guiadacarreira.com.br/blog/nutricao",
        tags: "nutrição, nutricionista, alimentação, dieta, saúde, bem-estar, nutrição esportiva, nutrição clínica, saude"
    },
    {
        nomeCurso: "Odontologia",
        descricao: "O curso de Odontologia forma profissionais que cuidam da saúde bucal, realizando diagnósticos, tratamentos e prevenções de doenças bucais. Atua em consultórios, clínicas, hospitais e serviços públicos de saúde.",
        duracao: "5 anos",
        salarioMedio: "R$ 4.000 a R$ 12.000* (varia conforme especialidade e local de trabalho)",
        areaConhecimento: "Saúde",
        link: "https://www.guiadacarreira.com.br/blog/odontologia",
        tags: "odontologia, dentista, saúde bucal, tratamento, prevenção, consultório, saude"
    },
    {
        nomeCurso: "Pedagogia",
        descricao: "O curso de Pedagogia forma profissionais capazes de ensinar em diversos níveis de ensino, desde a educação infantil até o ensino superior. Atua na elaboração e implementação de projetos pedagógicos, na gestão escolar e no desenvolvimento de práticas educativas inovadoras.",
        duracao: "4 anos",
        salarioMedio: "R$ 2.500 a R$ 5.000* (varia conforme experiência e local de trabalho)",
        areaConhecimento: "Humanas",
        link: "https://www.guiadacarreira.com.br/blog/pedagogia",
        tags: "pedagogia, educação, professor, ensino, aprendizagem, escola, projeto pedagógico"
    },
    {
        nomeCurso: "Psicologia",
        descricao: "O curso de Psicologia forma profissionais habilitados a estudar os processos mentais e o comportamento humano. O curso aborda disciplinas como desenvolvimento humano, psicopatologia e psicoterapia.",
        duracao: "5 anos",
        salarioMedio: "R$ 3.000 a R$ 10.000* (varia conforme área de atuação e experiência)",
        areaConhecimento: "Ciências Humanas",
        link: "https://www.guiadacarreira.com.br/blog/psicologia",
        tags: "psicologia, psicologo, comportamento, mente, desenvolvimento humano, psicopatologia, psicoterapia, terapia, saude"
    },
    {
        nomeCurso: "Radiologia",
        descricao: "O curso de Radiologia forma profissionais que atuam na produção de imagens médicas para diagnóstico e tratamento de doenças. Realizam exames como raio-x, tomografia computadorizada e ressonância magnética, e podem trabalhar em hospitais, clínicas e centros de diagnóstico por imagem.",
        duração: "4 anos",
        salarioMedio: "R$ 2.500 a R$ 8.000* (varia conforme experiência, local de trabalho e área de atuação)",
        areaConhecimento: "Saúde",
        link: "https://www.guiadacarreira.com.br/blog/radiologia",
        tags: "radiologia, radiologista, imagem médica, raio-x, tomografia, ressonância magnética, saude"
    },
    {
        nomeCurso: "Saúde Coletiva",
        descricao: "O curso de Saúde Coletiva forma profissionais que atuam na promoção da saúde e na prevenção de doenças em nível populacional. Trabalham em órgãos de saúde pública, ONGs e instituições de pesquisa, desenvolvendo programas e políticas públicas de saúde.",
        duração: "4 anos",
        salarioMedio: "R$ 2.500 a R$ 8.000* (varia conforme experiência, local de trabalho e área de atuação)",
        areaConhecimento: "Saúde",
        link: "https://www.guiadacarreira.com.br/blog/saude-coletiva",
        tags: "saúde coletiva, saúde pública, epidemiologia, promoção da saúde, prevenção de doenças, sanitarista, saude"
    },
    {
        nomeCurso: "Serviço Social",
        descricao: "O curso de Serviço Social forma profissionais que atuam na área social, promovendo a justiça social e a cidadania. Trabalham em diversas instituições, como órgãos públicos, ONGs e empresas, desenvolvendo projetos sociais e realizando ações de assistência social.",
        duracao: "4 anos",
        salarioMedio: "R$ 2.500 a R$ 5.000* (varia conforme experiência e local de trabalho)",
        areaConhecimento: "Humanas",
        link: "https://www.guiadacarreira.com.br/blog/servico-social",
        tags: "serviço social, assistente social, justiça social, cidadania, projeto social, assistência social"
    },
    {
        nomeCurso: "Sistemas de Informação",
        descricao: "O curso de Sistemas de Informação forma profissionais capazes de desenvolver, implementar e gerenciar sistemas de informação em diversas organizações. O curso aborda desde fundamentos de programação e bancos de dados até gestão de projetos e análise de negócios.",
        duracao: "4 anos", 
        salarioMedio: "R$ 5.000 a R$ 15.000* (varia conforme experiência e localização)",
        areaConhecimento: "Tecnologia da Informação, Ciência da Computação e Administração", 
        link: "https://www.guiadacarreira.com.br/blog/sistemas-informacao",
        tags: "sistema de informacao, programacao, programacão, programaçao desenvolvedor, dev, Analise de sistemas, Análise de sistemas, Analista de sistemas, banco de dados, TI, tecnologia da informação, gestão de projetos, ciência da computação, administração"
     },
     {
        nomeCurso: "Terapia Ocupacional",
        descricao: "O curso de Terapia Ocupacional forma profissionais que auxiliam pessoas com deficiências, doenças ou lesões a desenvolverem habilidades para realizar atividades da vida diária e participarem de forma mais ativa na sociedade. Atuam em hospitais, clínicas, escolas, empresas e comunidades.",
        duracao: "5 anos",
        salarioMedio: "R$ 2.500 a R$ 8.000* (varia conforme experiência, local de trabalho e área de atuação)",
        areaConhecimento: "Saúde",
        link: "https://www.guiadacarreira.com.br/blog/terapia-ocupacional",
        tags: "terapia ocupacional, terapeuta ocupacional, reabilitação, deficiência, doença, atividades da vida diária, saude"
    }
]