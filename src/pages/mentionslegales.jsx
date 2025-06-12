
import "../assets/css/mentionslegales.css"
export function Mentionslegales() {

	function navigateToHome(){
		window.location.href = "/";
	}
	return (
		<>
			<div className="mentionslegales">

				<div className="navbarResponsive">

					<div className="link" onClick={() => {
						navigateToHome()
					}}><span>[01]</span>
						<span>A propos</span>
					</div>

					<div className="link" onClick={() => {
						navigateToHome()
					}}><span>[02]</span>
						<span>Projets</span>
					</div>
					<div className="link"  onClick={() => {
						navigateToHome()
					}}><span>[03]</span>
						<span>Contact</span>
					</div>

				</div>
				<div className="columns">
					<div className="column">
						<div className="logo"><span>Antoine Claitte</span></div>

					</div>
					<div className="column" />
					<div className="column" />
					<div className="column">
						<div className="link" onClick={navigateToHome}><span>[01]</span>
							<div className="animatedSpan">
							<div>
								<span>A propos</span>
								<span>A propos</span>
								<span>A propos</span>
							</div>

							</div>
						</div>
					</div>
					<div className="column">
						<div className="link" onClick={navigateToHome}><span>[02]</span>
							<div className="animatedSpan">
								<div>
									<span>Projets</span>
									<span>Projets</span>
									<span>Projets</span>
								</div>

							</div>
						</div>
					</div>
					<div className="column" onClick={navigateToHome}>
						<div className="link"><span>[03]</span>
							<div className="animatedSpan">
							<div>
								<span>Contact</span>
								<span>Contact</span>
								<span>Contact</span>
							</div>

							</div>
						</div>
					</div>
				</div>

				<h2>Mentions Légales :</h2>
				<div>
					<h3>1. Édition du site</h3>
					<p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet https://antoineclaitte.com l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:</p>
<p>Propriétaire du site : Antoine Claitte - Contact : contact@antoineclaitte.com 0651484225 - Adresse : 101 Chemin de Ronde.</p>

					<p>Identification de l'entreprise : Antoine Claitte au capital social de € - SIREN : - RCS ou RM : - Adresse postale : 101 Chemin de Ronde -</p>

					<p>Directeur de la publication : Antoine Claitte - Contact : contact@antoineclaitte.com.</p>

					<p>Hébergeur : AutreLinode 249 Arch Street, Philadelphia, PA 19106, USA +33-156697240</p>

					<p>Délégué à la protection des données : Antoine Claitte - contact@antoineclaitte.com</p>

					<p>Webmastr : GENOS CENTER by Mey Detour – contact@md-genos.com - 07 56 91 98 17 - www.genos-center.com <br/></p>
				</div>

				<div>
					<h3>2. Propriété intellectuelle et contrefaçons.</h3>
					<p>Antoine Claitte est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.</p>

					<p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Claite Antoine.</p>

					<p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
				</div>
				<div>
					<h3>3. Limitations de responsabilité.</h3>
					<p>Antoine Claitte ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site https://antoineclaitte.com.</p>

					<p>Antoine Claitte décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur https://antoineclaitte.com.</p>

					<p>Antoine Claitte s’engage à sécuriser au mieux le site https://antoineclaitte.com, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.</p>

					<p>Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. Antoine Claitte se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.</p>

					<p>Le cas échéant, Antoine Claitte se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</p>
				</div>
				<div>
					<h3>4. CNIL et gestion des données personnelles.</h3>
					<p>Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site https://antoineclaitte.com dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : Antoine Claitte - contact@antoineclaitte.com.</p>

				 	</div>
				<div>
					<h3>6. Droit applicable et attribution de juridiction.</h3>
					<p>Tout litige en relation avec l’utilisation du site https://antoineclaitte.com est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Miribel.</p>
				</div>


			</div>
		</>

	);
}

