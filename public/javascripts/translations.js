I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"activerecord":{"attributes":{"user":{"confirmation_sent_at":"Confirmation sent at","confirmation_token":"Confirmation token","confirmed_at":"Confirmed at","created_at":"Created at","current_password":"Current password","current_sign_in_at":"Current sign in at","current_sign_in_ip":"Current sign in IP","email":"Email","encrypted_password":"Encrypted password","failed_attempts":"Failed attempts","last_sign_in_at":"Last sign in at","last_sign_in_ip":"Last sign in IP","locked_at":"Locked at","password":"Password","password_confirmation":"Password confirmation","remember_created_at":"Remember created at","remember_me":"Remember me","reset_password_sent_at":"Reset password sent at","reset_password_token":"Reset password token","sign_in_count":"Sign in count","unconfirmed_email":"Unconfirmed email","unlock_token":"Unlock token","updated_at":"Updated at"}},"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}},"models":{"user":{"one":"User","other":"Users"}}},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"x_years":{"one":"1 year","other":"%{count} years"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"devise":{"confirmations":{"confirmed":"Your email address has been successfully confirmed.","new":{"resend_confirmation_instructions":"Resend confirmation instructions"},"send_instructions":"You will receive an email with instructions for how to confirm your email address in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid %{authentication_keys} or password.","last_attempt":"You have one more attempt before your account is locked.","locked":"Your account is locked.","not_found_in_database":"Invalid %{authentication_keys} or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your email address before continuing."},"mailer":{"confirmation_instructions":{"action":"Confirm my account","greeting":"Welcome %{recipient}!","instruction":"You can confirm your account email through the link below:","subject":"Confirmation instructions"},"email_changed":{"greeting":"Hello %{recipient}!","message":"We're contacting you to notify you that your email has been changed to %{email}.","subject":"Email Changed"},"password_change":{"greeting":"Hello %{recipient}!","message":"We're contacting you to notify you that your password has been changed.","subject":"Password Changed"},"reset_password_instructions":{"action":"Change my password","greeting":"Hello %{recipient}!","instruction":"Someone has requested a link to change your password. You can do this through the link below.","instruction_2":"If you didn't request this, please ignore this email.","instruction_3":"Your password won't change until you access the link above and create a new one.","subject":"Reset password instructions"},"unlock_instructions":{"action":"Unlock my account","greeting":"Hello %{recipient}!","instruction":"Click the link below to unlock your account:","message":"Your account has been locked due to an excessive number of unsuccessful sign in attempts.","subject":"Unlock instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"edit":{"change_my_password":"Change my password","change_your_password":"Change your password","confirm_new_password":"Confirm new password","new_password":"New password"},"new":{"forgot_your_password":"Forgot your password?","send_me_reset_password_instructions":"Send me reset password instructions"},"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password has been changed successfully. You are now signed in.","updated_not_active":"Your password has been changed successfully."},"registrations":{"destroyed":"Bye! Your account has been successfully cancelled. We hope to see you again soon.","edit":{"are_you_sure":"Are you sure?","cancel_my_account":"Cancel my account","currently_waiting_confirmation_for_email":"Currently waiting confirmation for: %{email}","leave_blank_if_you_don_t_want_to_change_it":"leave blank if you don't want to change it","title":"Edit %{resource}","unhappy":"Unhappy?","update":"Update","we_need_your_current_password_to_confirm_your_changes":"we need your current password to confirm your changes"},"new":{"sign_up":"Sign up"},"signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirm link to confirm your new email address.","updated":"Your account has been updated successfully."},"sessions":{"already_signed_out":"Signed out successfully.","new":{"sign_in":"Log in"},"signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"shared":{"links":{"back":"Back","didn_t_receive_confirmation_instructions":"Didn't receive confirmation instructions?","didn_t_receive_unlock_instructions":"Didn't receive unlock instructions?","forgot_your_password":"Forgot your password?","sign_in":"Log in","sign_in_with_provider":"Sign in with %{provider}","sign_up":"Sign up"},"minimum_password_length":{"one":"(%{count} character minimum)","other":"(%{count} characters minimum)"}},"unlocks":{"new":{"resend_unlock_instructions":"Resend unlock instructions"},"send_instructions":"You will receive an email with instructions for how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","already_confirmed":"was already confirmed, please try signing in","blank":"can't be blank","confirmation":"doesn't match %{attribute}","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","expired":"has expired, please request a new one","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"},"odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}},"unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"destroy":{"alert":"%{resource_name} could not be destroyed.","notice":"%{resource_name} was successfully destroyed."},"update":{"notice":"%{resource_name} was successfully updated."}}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"i18n":{"plural":{"keys":["one","other"],"rule":{}}},"languages":{"selector":{"en":"English"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"simple_form":{"error_notification":{"default_message":"Please review the problems below:"},"no":"No","required":{"mark":"*","text":"required"},"yes":"Yes"},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"}});
I18n.translations["pt-BR"] = I18n.extend((I18n.translations["pt-BR"] || {}), {"activerecord":{"attributes":{"file_resource":{"created_at":"Criado em"},"paper":{"abstract":"Resumo","authors":"Autores","id":"ID","journal":"Jornal","keywords":"Palavras-chave","publication_year":"Ano de publicação","source":"Fonte","title":"Título","type":"Tipo"},"research":{"created_at":"Criado em","description":"Descrição"},"user":{"confirmation_sent_at":"Confirmação enviada em","confirmation_token":"Token de confirmação","confirmed_at":"Confirmado em","created_at":"Criado em","current_password":"Senha atual","current_sign_in_at":"Atualmente logado em","current_sign_in_ip":"IP do acesso atual","email":"Email","encrypted_password":"Senha criptografada","failed_attempts":"Tentativas sem sucesso","last_sign_in_at":"Último acesso em","last_sign_in_ip":"Último IP de acesso","locked_at":"Bloqueado em","password":"Senha","password_confirmation":"Confirme sua senha","remember_created_at":"Lembrar criado em","remember_me":"Lembre-se de mim","reset_password_sent_at":"Resetar senha enviado em","reset_password_token":"Resetar token de senha","sign_in_count":"Contagem de acessos","unconfirmed_email":"E-mail não confirmado","unlock_token":"Token de desbloqueio","updated_at":"Atualizado em"}},"errors":{"messages":{"record_invalid":"A validação falhou: %{errors}","restrict_dependent_destroy":{"has_many":"Não é possível excluir o registro pois existem %{record} dependentes","has_one":"Não é possível excluir o registro pois existe um %{record} dependente"}}},"models":{"file_resource":{"one":"Arquivo de importação","other":"Arquivos de importação"},"research":"Pesquisa","user":"Usuário"}},"buttons":{"cancel":"Cancelar","edit":"Editar","explore":"Explorar","new_research":"Nova pesquisa","remove":"Remover"},"date":{"abbr_day_names":["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],"abbr_month_names":[null,"Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],"day_names":["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],"formats":{"default":"%d/%m/%Y","long":"%d de %B de %Y","short":"%d de %B"},"month_names":[null,"Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"aproximadamente 1 hora","other":"aproximadamente %{count} horas"},"about_x_months":{"one":"aproximadamente 1 mês","other":"aproximadamente %{count} meses"},"about_x_years":{"one":"aproximadamente 1 ano","other":"aproximadamente %{count} anos"},"almost_x_years":{"one":"quase 1 ano","other":"quase %{count} anos"},"half_a_minute":"meio minuto","less_than_x_minutes":{"one":"menos de um minuto","other":"menos de %{count} minutos"},"less_than_x_seconds":{"one":"menos de 1 segundo","other":"menos de %{count} segundos"},"over_x_years":{"one":"mais de 1 ano","other":"mais de %{count} anos"},"x_days":{"one":"1 dia","other":"%{count} dias"},"x_minutes":{"one":"1 minuto","other":"%{count} minutos"},"x_months":{"one":"1 mês","other":"%{count} meses"},"x_seconds":{"one":"1 segundo","other":"%{count} segundos"},"x_years":{"one":"1 ano","other":"%{count} anos"}},"prompts":{"day":"Dia","hour":"Hora","minute":"Minuto","month":"Mês","second":"Segundo","year":"Ano"}},"devise":{"confirmations":{"confirmed":"A sua conta foi confirmada com sucesso.","new":{"resend_confirmation_instructions":"Reenviar instruções de confirmação"},"send_instructions":"Dentro de minutos, você receberá um email com as instruções de confirmação da sua conta.","send_paranoid_instructions":"Se o seu email existir em nosso banco de dados, você receberá um email com instruções sobre como confirmar sua conta em alguns minutos."},"failure":{"already_authenticated":"Você já está autenticado.","inactive":"A sua conta ainda não foi ativada.","invalid":"Invalido %{authentication_keys} ou senha.","last_attempt":"Você tem mais uma única tentativa antes de sua conta ser bloqueada.","locked":"A sua conta está bloqueada.","not_found_in_database":"Invalido %{authentication_keys} ou senha.","timeout":"A sua sessão expirou, por favor, faça login novamente para continuar.","unauthenticated":"Para continuar, faça login ou registre-se.","unconfirmed":"Antes de continuar, confirme a sua conta."},"mailer":{"confirmation_instructions":{"action":"Confirmar minha conta","greeting":"Bem-vindo %{recipient}!","instruction":"Você pode confirmar sua conta através do link abaixo:","subject":"Instruções de confirmação"},"email_changed":{"greeting":"Olá %{recipient}!","message":"Estamos entrando em contato para notificá-lo de que seu e-mail está sendo alterado para %{email}.","subject":"E-mail alterado"},"password_change":{"greeting":"Olá %{recipient}!","message":"Estamos entrando em contato para notificá-lo de que sua senha foi alterada.","subject":"Senha alterada"},"reset_password_instructions":{"action":"Redefinir minha senha","greeting":"Olá %{recipient}!","instruction":"Alguém fez o pedido para redefinir sua senha, e você pode fazer isso clicando no link abaixo.","instruction_2":"Se você não fez este pedido, por favor ignore este e-mail.","instruction_3":"Sua senha não será alterada até que você acesse o link acima e crie uma nova.","subject":"Instruções de redefinição de senha"},"unlock_instructions":{"action":"Desbloquear minha conta","greeting":"Olá %{recipient}!","instruction":"Clique no link abaixo para desbloquear sua conta:","message":"Sua conta foi bloqueada devido ao excessivo número de tentativas acesso inválidas.","subject":"Instruções de desbloqueio"}},"omniauth_callbacks":{"failure":"Não foi possível autorizar de uma conta de %{kind} porque \"%{reason}\".","success":"Autorizado com sucesso de uma conta de %{kind}."},"passwords":{"edit":{"change_my_password":"Alterar minha senha","change_your_password":"Alterar sua senha","confirm_new_password":"Confirme sua nova senha","new_password":"Nova senha"},"new":{"forgot_your_password":"Esqueceu sua senha?","send_me_reset_password_instructions":"Enviar instruções para redefinição da senha"},"no_token":"Você não pode acessar esta página sem estar logado. Se você veio de um email de redefinição de senha, por favor certifique-se de ter digitado a URL corretamente.","send_instructions":"Dentro de minutos, você receberá um email com as instruções de redefinição da sua senha.","send_paranoid_instructions":"Se o seu email existir em nosso banco de dados, você receberá um email com um link para recuperação da senha.","updated":"A sua senha foi alterada com sucesso. Você está autenticado.","updated_not_active":"Sua senha foi alterada com sucesso."},"registrations":{"destroyed":"Adeus! A sua conta foi cancelada com sucesso. Esperamos vê-lo novamente em breve.","edit":{"are_you_sure":"Você tem certeza?","cancel_my_account":"Cancelar minha conta","currently_waiting_confirmation_for_email":"No momento esperando por: %{email}","leave_blank_if_you_don_t_want_to_change_it":"deixe em branco caso não queira alterá-la","title":"Editar %{resource}","unhappy":"Não está contente?","update":"Atualizar","we_need_your_current_password_to_confirm_your_changes":"precisamos da sua senha atual para confirmar suas mudanças"},"new":{"sign_up":"Inscrever-se"},"signed_up":"Bem vindo! Você realizou seu registro com sucesso.","signed_up_but_inactive":"Você se inscreveu com sucesso, porém nós não podemos autenticá-lo porque sua conta ainda não foi ativada.","signed_up_but_locked":"Você se inscreveu com sucesso. Porém nós não podemos autenticá-lo porque sua conta está bloqueada.","signed_up_but_unconfirmed":"Uma mensagem com um link de confirmação foi enviada para o seu e-mail. Por favor, acesse o link para ativar sua conta.","update_needs_confirmation":"Sua conta foi atualizada com sucesso, mas nós precisamos verificar o novo endereço de email. Por favor, verifique seu email e clique no link de confirmação para finalizar confirmando o seu novo email.","updated":"A sua conta foi atualizada com sucesso."},"sessions":{"already_signed_out":"Logout efetuado com sucesso.","new":{"sign_in":"Login"},"signed_in":"Login efetuado com sucesso.","signed_out":"Logout efetuado com sucesso."},"shared":{"links":{"back":"Voltar","didn_t_receive_confirmation_instructions":"Não recebeu instruções de confirmação?","didn_t_receive_unlock_instructions":"Não recebeu instruções de desbloqueio?","forgot_your_password":"Esqueceu sua senha?","sign_in":"Login","sign_in_with_provider":"Entrar com %{provider}","sign_up":"Inscrever-se"},"minimum_password_length":{"one":"(Mínimo de %{count} caractere)","other":"(Mínimo de %{count} caracteres)"}},"unlocks":{"new":{"resend_unlock_instructions":"Reenviar instruções de desbloqueio"},"send_instructions":"Dentro de minutos, você receberá um email com instruções de desbloqueio da sua conta.","send_paranoid_instructions":"Se sua conta existir em nosso banco de dados, você receberá em breve um email com instruções para desbloquear ela.","unlocked":"A sua conta foi desbloqueada com sucesso. Você está autenticado."}},"dt_actions":"Ações","errors":{"format":"%{attribute} %{message}","messages":{"accepted":"deve ser aceito","already_confirmed":"já foi confirmado","blank":"não pode ficar em branco","confirmation":"não é igual a %{attribute}","confirmation_period_expired":"É necessário ser confirmado dentro do período %{period}, por favor requisite um novo usuário.","empty":"não pode ficar vazio","equal_to":"deve ser igual a %{count}","even":"deve ser par","exclusion":"não está disponível","expired":"expirou, por favor solicite uma nova","greater_than":"deve ser maior que %{count}","greater_than_or_equal_to":"deve ser maior ou igual a %{count}","inclusion":"não está incluído na lista","invalid":"não é válido","less_than":"deve ser menor que %{count}","less_than_or_equal_to":"deve ser menor ou igual a %{count}","model_invalid":"A validação falhou: %{errors}","not_a_number":"não é um número","not_an_integer":"não é um número inteiro","not_found":"não encontrado","not_locked":"não foi bloqueado","not_saved":{"one":"Não foi possível salvar %{resource}: 1 erro","other":"Não foi possível salvar %{resource}: %{count} erros."},"odd":"deve ser ímpar","other_than":"deve ser diferente de %{count}","present":"deve ficar em branco","required":"é obrigatório(a)","taken":"já está em uso","too_long":{"one":"é muito longo (máximo: 1 caracter)","other":"é muito longo (máximo: %{count} caracteres)"},"too_short":{"one":"é muito curto (mínimo: 1 caracter)","other":"é muito curto (mínimo: %{count} caracteres)"},"wrong_length":{"one":"não possui o tamanho esperado (1 caracter)","other":"não possui o tamanho esperado (%{count} caracteres)"}},"template":{"body":"Por favor, verifique o(s) seguinte(s) campo(s):","header":{"one":"Não foi possível gravar %{model}: 1 erro","other":"Não foi possível gravar %{model}: %{count} erros"}}},"file_resources":{"create":{"success":"O arquivo foi enviado com sucesso."},"destroy":{"success":"O arquivo foi excluído com sucesso."},"import":{"success":"O arquivo foi importado com sucesso."}},"helpers":{"buttons":{"delete_all_papers":"Remover todos os artigos","download":"Baixar","import":"Importar","imported":"Importado","remove":"Remover","save":"Salvar"},"links":{"back":"Voltar","confirm":"Você tem certeza?","destroy":"Excluir","edit":"Editar","planning":"Planejamento","retrieve_papers":"Recuperar artigos"},"select":{"prompt":"Por favor selecione"},"submit":{"create":"Criar %{model}","submit":"Salvar %{model}","update":"Atualizar %{model}"},"tables":{"actions":"Ações"}},"languages":{"selector":{"en":"Inglês","pt-BR":"Português"}},"modals":{"close":"Fechar","dataConfirmModal":{"cancel":"Cancelar","commit":"Sim, tenho!","confirm":"Você tem certeza disso?","title":"Confirmação"}},"navbar":{"items":{"home":"Principal","my_researches":"Minhas pesquisas"},"search":"Procurar","user":{"logout":"Sair","my_profile":"Meu perfil","preferences":"Preferências"}},"number":{"currency":{"format":{"delimiter":".","format":"%u %n","precision":2,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"R$"}},"format":{"delimiter":".","precision":3,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":{"one":"bilhão","other":"bilhões"},"million":{"one":"milhão","other":"milhões"},"quadrillion":{"one":"quatrilhão","other":"quatrilhões"},"thousand":"mil","trillion":{"one":"trilhão","other":"trilhões"},"unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":".","format":"%n%"}},"precision":{"format":{"delimiter":"."}}},"papers":{"remove_all":{"success":"Todos os artigos foram excluídos com sucesso."}},"researches":{"create":{"success":"Pesquisa criada com sucesso."},"destroy":{"success":"Pesquisa removida com sucesso."},"edit":{"title":"Editando pesquisa"},"index":{"title":"Minhas pesquisas"},"new":{"title":"Nova pesquisa"},"retrieve_papers":{"filename":"Nome do arquivo","files_empty_table":"Nenhum arquivo foi enviado ainda.","mime_type":"Tipo MIME","retrieved_papers":"Artigos recuperados","size":"Tamanho","upload_files":"Enviar arquivos"},"show":{"title":"Detalhes da pesquisa"},"update":{"success":"Pesquisa atualizada com sucesso."}},"simple_form":{"error_notification":{"default_message":"Por favor, revise os problemas abaixo:"},"labels":{"file_resource":{"file":"Arquivo"},"research":{"description":"Descrição"}},"no":"Não","required":{"mark":"*","text":"Obrigatório"},"yes":"Sim"},"support":{"array":{"last_word_connector":" e ","two_words_connector":" e ","words_connector":", "}},"time":{"am":"","formats":{"default":"%a, %d de %B de %Y, %H:%M:%S %z","long":"%d de %B de %Y, %H:%M","short":"%d de %B, %H:%M"},"pm":""},"uppy":{"core":{"companionError":"Conexão com Companheiro falhou.","exceedsSize":"Esse arquivo excede o tamanho máximo permitido.","youCanOnlyUploadFileTypes":"Você pode enviar apenas:","youCanOnlyUploadX":{"0":"Você pode enviar apenas %{smart_count} arquivo","1":"Você pode enviar apenas %{smart_count} arquivos"},"youHaveToAtLeastSelectX":{"0":"Você tem que selecionar pelo menos %{smart_count} arquivo","1":"Você tem que selecionar pelo menos %{smart_count} arquivos"}},"fileinput":{"chooseFiles":"Selecionar arquivos"},"statusbar":{"cancel":"Cancelar","cancelUpload":"Cancelar upload","complete":"Completo","dataUploadedOfTotal":"%{complete} de %{total}","filesUploadedOfTotal":{"0":"%{complete} de %{smart_count} arquivo enviado","1":"%{complete} of %{smart_count} arquivos enviado"},"pauseUpload":"Pausar upload","paused":"Pausado","pleasePressRetry":"Por favor, envie o arquivo novamente","resumeUpload":"Continuar upload","retry":"Repetir","retryUpload":"Repetir o upload","uploadFailed":"Envio falhou","uploadXFiles":{"0":"Enviar %{smart_count} arquivo","1":"Enviar %{smart_count} arquivos"},"uploadXNewFiles":{"0":"Enviar +%{smart_count} arquivo","1":"Enviar +%{smart_count} arquivos"},"uploading":"Enviando","xTimeLeft":"%{time} restantes"}}});
