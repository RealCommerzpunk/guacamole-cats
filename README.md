# guacamole-cats 🐈‍⬛

**Katzen-Nacht** – ein dunkles, katzenthemiertes Design für [Apache Guacamole](https://guacamole.apache.org/).
Nachtblau mit bernsteinfarbenen Akzenten, einer Katzen-Szene auf dem Login-Screen und eigenem Favicon.
Deutsch und Englisch (richtet sich nach der Browsersprache).

## Installation

1. Die neueste `guacamole-cat-theme.jar` unter [Releases](../../releases/latest) herunterladen.
2. In das Extensions-Verzeichnis von Guacamole kopieren, z. B. `/etc/guacamole/extensions/`
   (bei Docker: `<GUACAMOLE_HOME>/extensions/`).
3. Guacamole bzw. den Servlet-Container (Tomcat) neu starten und die Seite mit Strg+F5 neu laden.

Zum Entfernen die Datei wieder löschen und neu starten.

## Anpassen

- Farben: `css/cat-theme.css` (Variablen am Anfang der Datei)
- Texte/Name: `translations/de.json`, `translations/en.json`
- Favicon: `resources/images/favicon.svg`

Die `.jar` ist nur eine umbenannte ZIP-Datei. Selbst bauen:

```
zip -r guacamole-cat-theme.jar guac-manifest.json css js resources translations
```

## Hinweis

Die Versionsnummer auf dem Login-Screen stammt von Guacamole selbst und wird vom Theme nur gestaltet.
